import { connect, disconnect } from '$lib/database/db';
import { model as posts } from "$lib/database/models/post";

const PUBLIC_API_KEY = "136501080131";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ params }) {

    if (params.key !== PUBLIC_API_KEY) return new Response("You inputted the wrong API key!", { status: 469, statusText: "Unathorized entry" });

    await connect();

    const allPosts = await posts.find();

    await disconnect();

    return new Response(JSON.stringify(allPosts), { status: 269, statusText: "Success" });
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request, params }) {

    if (params.key !== PUBLIC_API_KEY) return new Response("You inputted the wrong API key!", { status: 469, statusText: "Unathorized entry" });


    await connect();

    // @ts-ignore
    const body = await request.json();
    // @ts-ignore
    const { id, type, author, content } = body;

    if (!author || !content) return new Response("No author object or/and content detected.", 
        { status: 469, statusText: "Necessary Data: Null" });

    await posts.create({ 
        id: id,
        type: type,
        content: content,
        author: author,
        timestamp: Date.now()
    });

    await disconnect();

    // @ts-ignore
    if (request) return new Response("Data stored.", { status: 269, statusText: "Success" });
    else return new Response("Data failed to be stored.", { status: 469, statusText: "Fail" });

}
