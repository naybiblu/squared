import { connect, disconnect } from '$lib/database/db';
import { model as users } from "$lib/database/models/user";
const PUBLIC_API_KEY = "136501080131";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {

    if (params.key !== PUBLIC_API_KEY) return new Response("You inputted the wrong API key!", { status: 469, statusText: "Unathorized entry" });

    await connect();

    const allUsers = await users.find();

    await disconnect();

    if (allUsers) return new Response(JSON.stringify(allUsers), { status: 269, statusText: "Success" });
    else return new Response("User collection is empty.", { status: 469, statusText: "Failed"});
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, params }) {

    if (params.key !== PUBLIC_API_KEY) return new Response("You inputted the wrong API key!", { status: 469, statusText: "Unathorized entry" });

    await connect();

    // @ts-ignore
    const body = await request.json();
    // @ts-ignore
    const { id, name, username, credentials } = body;

    if (!body) return new Response("No data detected.", 
        { status: 469, statusText: "Necessary Data: Null" });

    const createUser = await users.create({ 
        id: id,
        name: name,
        username: username,
        credentials: credentials,
        createdAt: Date.now()
    });

    await disconnect();

    // @ts-ignore
    if (createUser) return new Response("Data stored.", { status: 269, statusText: "Success" });
    else return new Response("Data failed to be stored.", { status: 469, statusText: "Fail" });

}
