import { connect, disconnect } from "$lib/database/db";
import { model as users } from "$lib/database/models/user";
import { login } from '$lib/helpers/discord';

/** @type {import('@sveltejs/kit').HandleServerError} */
export function handleError({ error }: any) {

    let message = "It's not you. It's us.";
    switch (error?.code) {
        case 401:
        case 403: message = "You are not supposed to be here, right?"; break;
        case 404: message = "It seems you found an uncharted place.";
    }
    return {
      message: message,
      code: error?.code ?? 'UNKNOWN'
    };
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }: any) {
    const session = event.cookies.get('session');
    const verify = event.cookies.get('verification');

    if (!session) return await resolve(event);

    await connect();
    await login();
    const user = await users.findOne({ authId: session });
    const temp = await users.findOne({ authId: verify });

    if (user) {
        event.locals.user = {
            fName: user.name.first,
            lName: user.name.last,
            username: user.username,
            role: user.username === "naybiblu" ? "DEV" : "USER",
            email: user.credentials.email,
            avatar: user.img.avatar
        }
    }

    if (temp) {
        event.locals.temp = {
            email: temp.credentials.email,
            status: 2
        }
    }

    return await resolve(event);

  }
