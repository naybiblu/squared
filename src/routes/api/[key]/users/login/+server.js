import { connect, disconnect } from '$lib/database/db';
import { model as users } from "$lib/database/models/user";


/** @type {import('@sveltejs/kit').RequestHandler<{
 * }>} */
export async function POST({ request, params }) {

    await connect();
        
    const body = await request.json();
    const { email, pass, login } = body;

    if (!body || !email || !pass || login === undefined) return new Response("Please give the credentials.", { status: 469, statusText: "No data"});

    const user = await users.findOneAndUpdate({
        credentials: {
            email: email,
            password: pass
        }
    }, {
        $set: { "settings.loggedIn": login }
    });

    await disconnect();

    if (!user) return new Response("The user you are looking for is not existing.", { status: 469, statusText: "Non-existent data"});
    else return new Response(JSON.stringify(user), { status: 269, statusText: "Success" });
};