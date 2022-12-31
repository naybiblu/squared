import { connect, disconnect } from "$lib/database/db";
import { model as users } from "$lib/database/models/user";

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }: any) {
    const session = event.cookies.get('session');

    if (!session) return await resolve(event);

    await connect();
    const user = await users.findOne({ authId: session });

    if (user) {
        event.locals.user = {
            fName: user.name.first,
            lName: user.name.last,
            username: user.username,
            role: user.username === "naybiblu" ? "DEV" : "USER",
            email: user.credentials.email
        }
    }

    return await resolve(event);

  }
