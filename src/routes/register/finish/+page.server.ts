import { model as users } from '$lib/database/models/user';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
	if (locals.user) throw redirect(302, '/');
	if (!locals.temp) throw redirect(302, '/register/start');
	const user = await users.findOne({ 'credentials.email': locals.temp.email });
	if (user.badge.includes('unknown')) throw redirect(302, '/register/verify');
	if (user.name.first.includes('unknown')) throw redirect(302, '/register/finish/first');
	else {
		throw redirect(302, '/register/finish/last');
	}
}
