import { connect, disconnect } from "$lib/database/db";
import { model as users } from "$lib/database/models/user";
import { redirect, fail } from '@sveltejs/kit';
import { v4 as uuid } from "uuid";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
  if (locals.user) throw redirect(302, '/')
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }: any) => {
        const data = await request.formData();
        const firstName = data.get("first name");
        const lastName = data.get("last name");
        const username = data.get("username");
        const email = data.get("email");
        const pass = data.get("password");

        const uuID = uuid();

        if (await users.findOne({ 
          $or: [
            { "credentials.email": email },
            { $and: [ { "name.first": firstName }, { "name.last": lastName } ] },
            { username: username }
          ]
        })) return fail(469, { error: "The data you gave is already taken. Awww. :<"});

        const user = await users.create({
          id: uuid(),
          name: {
            first: firstName,
            last: lastName
          },
          username: username,
          createdAt: Date.now(),
          credentials: {
              email: email,
              password: pass
          },
          authId: uuID
        });

        cookies.set("session", uuID, {
          path: '/',
          httpOnly: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 30,
        })

        if (user) throw redirect(303, "/");
        else return fail(469, { error: "One of the data you entered is already existing." });

    }
};
