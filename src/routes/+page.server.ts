import { redirect } from "@sveltejs/kit";
import { v4 as uuid } from "uuid";
import { connect, disconnect } from "$lib/database/db";
import { model as posts } from "$lib/database/models/post";
import { model as users } from "$lib/database/models/user";

/** @type {import('./$types').PageServerLoad} 
export async function load({ locals }: any) {
    if (!locals?.user) throw redirect(302, '/login');
    return { user: locals?.user }
}*/

/** @type {import('./$types').Actions} */
export const actions = {
    logout: async ({ cookies }: any) => {

        cookies.set('session', '', {
            path: '/',
            expires: new Date(0),
        })

        throw redirect(303, "/login");

    },
    publish: async ({ request, locals }: any) => {

        const data = await request.formData();
        const text = data.get("text");
        const uuID = uuid(); 

        await connect();
        await posts.create({
            id: uuID,
            type: "text",
            content: text,
            author: {
                name: locals.user.username,
            },
            timestamp: Date.now()
        });
        await users.updateOne({
           username: locals.user.username
        }, {
            $push: { "interactions.posts": uuID }
        })
        await disconnect();

        throw redirect(303, "/");
    }
};
