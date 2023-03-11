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
    /*await login();
    const locals = await users.find({
        $or: [
            { authID: session },
            { authID: verify }
        ]
    }).limit(2);
    const user = event.locals.user ?? locals.filter((l: any) => l.badge.includes("newbie") ?? l.badge.includes(""))[0];
    const temp = event.locals.temp ?? locals.filter((l: any) => !l.badge.includes("newbie") ?? !l.badge.includes(""))[0];

    if (user) {
        event.locals.user = {
            fName: user.name.first,
            lName: user.name.last,
            username: user.username,
            role: user.username === "naybiblu" ? "DEV" : "USER",
            email: user.credentials.email,
            avatar: user.img.avatar
        }
    //}

    if (temp) {
        event.locals.temp = {
            email: temp.credentials.email,
            status: 2
        }
    }*/
    
    event.locals.user = {
            fName: "Mharc Nyvhie",
            lName: "Guillermo",
            username: "naybiblu",
            role: "naybiblu" === "naybiblu" ? "DEV" : "USER",
            email: "iamsuperv15@gmail.com"
     }

    return await resolve(event);

  }
