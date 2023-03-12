import { model as users } from '$lib/database/models/user';
import { redirect, fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
	if (!locals.temp) throw redirect(302, '/register/start');
	const user = await users.findOne({ 'credentials.email': locals.temp.email });
	if (user.badge.includes('email') || user.badge.includes('newbie'))
		throw redirect(302, '/register/finish');
	if (locals.user) throw redirect(302, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, locals }: any) => {
		const data = await request.formData();
		const code = {
			first: data.get('first'),
			second: data.get('second'),
			third: data.get('third'),
			fourth: data.get('fourth'),
			fifth: data.get('fifth')
		};
		const verify = Object.values(code).join('');

		const user = await users.findOne({
			'credentials.email': locals.temp.email
		});

		if (user.credentials.password !== verify)
			return fail(469, { error: 'You gave the wrong code.' });

		await users.updateOne(
			{
				username: user.username
			},
			{
				$push: { badge: 'email' }
			}
		);
		await users.updateOne(
			{
				username: user.username
			},
			{
				$pull: { badge: 'unknown' }
			}
		);

		throw redirect(303, '/register/finish');
	}
};
