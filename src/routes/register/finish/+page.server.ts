import { connect, disconnect } from "$lib/database/db";
import { model as users } from "$lib/database/models/user";
import { redirect, fail } from '@sveltejs/kit';
import { invalidate } from '$app/navigation';
import { v4 as uuid } from "uuid";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
  if (!locals.temp) throw redirect(302, "/register/start");
  const user = await users.findOne({ "credentials.email": locals.temp.email });
  const allUsers = await users.find();
  if (user.badge.includes("unknown")) throw redirect(302, "/register/verify");
  if (locals.user) throw redirect(302, '/');

  return { users: JSON.stringify({ ...allUsers }) };
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }: any) => {
        const data = await request.formData();
        const email = data.get("email");

        const uuID = uuid();

        await connect();

        if (await users.findOne({
          "credentials.email": email
        })) return fail(469, { error: "This email address is already taken."});
        const user = await users.create({
          name: {
            first: "unknown",
            last: "unknown"
          },
          username: uuid(),
          createdAt: Date.now(),
          credentials: {
              email: email,
              password: "squared"
          }
        });
        await disconnect();

        throw redirect(303, "/register/finish");
    }
};
