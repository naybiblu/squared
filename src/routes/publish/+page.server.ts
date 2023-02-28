import { connect, disconnect } from "$lib/database/db";
import { model as posts } from "$lib/database/models/post";
import { model as users } from "$lib/database/models/user";
import { redirect } from "@sveltejs/kit";
import { v4 as uuid } from "uuid";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
    if (!locals?.user) throw redirect(302, '/login');
    return { user: locals?.user }
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, locals }: any) => {
        const data = await request.formData();
        const post = data.get("post");
        const uuID = uuid(); 
        const { user } = locals;
    
        await connect();
        const createdPost = await posts.create({
            content: post,
            author: {
                name: {
                    first: user.fName,
                    last: user.lName
                },
                username: user.username,
                img: user.avatar
            },
            timestamp: Date.now(),
            id: uuID
        });

        await users.updateOne({
            username: user.username
        }, {
            $push: { "interactions.posts": uuID }
        })
        await disconnect();
 
        throw redirect(303, "/");
    }
};