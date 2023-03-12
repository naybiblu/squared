import { connect } from '$lib/database/db';
import { model as users } from '$lib/database/models/user';
import { login } from '$lib/helpers/discord';
import { error as err } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ error }: any) {
	//if (error?.code === 500) throw err(555, "It's not you, it's us.");
	console.log(error);
	return {
		message: "It's seems you explored an uncharted place.",
		code: error?.code ?? 'UNKNOWN'
	};
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }: any) {
	const session = event.cookies.get('session');

	await connect();
	await login();

	if (!session) return await resolve(event);

	const user = await users.findOne({ authId: session });
	const temp = await users.findOne({ authId: session });

	if (user) {
		event.locals.user = {
			fName: user.name.first,
			lName: user.name.last,
			username: user.username,
			role: user.username === 'naybiblu' ? 'DEV' : 'USER',
			email: user.credentials.email,
			avatar: user.img.avatar			
		};
	}

	if (temp) {
		event.locals.temp = {
			email: temp.credentials.email,
			status: 2
		};
	}

		
	return await resolve(event);

}
