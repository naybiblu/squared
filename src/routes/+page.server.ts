import { redirect } from "@sveltejs/kit";
import { connect, disconnect } from "$lib/database/db";
import { model as posts } from "$lib/database/models/post";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
    if (!locals?.user) throw redirect(302, '/login');

    await connect();
    const allPosts: any = await posts.find();
    await disconnect();

    return { 
        user: locals?.user,
        post: JSON.stringify({ ...allPosts })
    };
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies }: any) => {

        cookies.set('session', '', {
            path: '/',
            expires: new Date(0),
        })

        throw redirect(303, "/login");
    }
};
