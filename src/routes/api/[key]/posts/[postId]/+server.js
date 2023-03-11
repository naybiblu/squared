import { connect, disconnect } from '$lib/database/db';
import { model as posts } from "$lib/database/models/post";


/** @type {import('@sveltejs/kit').RequestHandler<{
 * postId: string;
 * }>} */
export async function GET({ params }) {

    await connect();
    
    if (!params) return new Response("Please give a post id!", { status: 469, statusText: "No params"});
    
    const post = await posts.findOne({ id: params.postId });

    await disconnect();

    if (!post) return new Response("The post you are looking for is not existing.", { status: 469, statusText: "Non-existent data"});
    else return new Response(JSON.stringify(post), { status: 269, statusText: "Success" });
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {

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