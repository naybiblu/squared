import { connect, disconnect } from '$lib/database/db';
import { model as users } from "$lib/database/models/user";


/** @type {import('@sveltejs/kit').RequestHandler<{
 * userId: string;
 * }>} */
export async function GET({ params }) {

    await connect();
    
    if (!params) return new Response("Please give a user id!", { status: 469, statusText: "No params"});
    
    const user = await users.findOne({ id: params.userId });

    await disconnect();

    if (!user) return new Response("The post you are looking for is not existing.", { status: 469, statusText: "Non-existent data"});
    else return new Response(JSON.stringify(user), { status: 269, statusText: "Success" });
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {

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
