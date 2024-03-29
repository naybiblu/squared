import { model as users } from '$lib/database/models/user';
import { redirect, fail } from '@sveltejs/kit';
import { v4 as uuid } from 'uuid';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
	if (locals.user) throw redirect(302, '/');
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies, locals }: any) => {
		const data = await request.formData();
		const email = data.get('email');
		const pass = data.get('pass');

		const uuID = uuid();
		const user = await users
			.findOne({
				'credentials.email': email
			})
			.lean();

		if (!user || user.credentials.password !== pass)
			return fail(469, { error: 'You gave the wrong credentials.' });

		await users.updateOne(
			{
				'credentials.email': email
			},
			{
				$set: { authId: uuID }
			}
		);

		/*const user = await users.findOneAndUpdate({
          credentials: {
            email: email,
            password: pass
          }
        }, {
          $set: { authId: uuID }
        });*/

		cookies.set('session', uuID, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 30
		});

		throw redirect(303, '/');
		/*if (true) throw redirect(303, "/");
        //else return fail(469, { error: "You gave the wrong credentials." });*/
	}
};
