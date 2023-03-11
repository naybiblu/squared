import { connect } from "$lib/database/db";
import { model as users } from "$lib/database/models/user";
import { login } from '$lib/helpers/discord';

/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ error }: any) {
    return {
      message: "It's seems you explored an uncharted place.",
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
    
    const user = await users.findOne({ authID: session });
    const temp = await users.findOne({ authID: verify });

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
