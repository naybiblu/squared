import { connect, disconnect } from "$lib/database/db";
import { model as users } from "$lib/database/models/user";
import { redirect, fail } from '@sveltejs/kit';
import { v4 as uuid } from "uuid";
import { generateNumCode } from "$lib/helpers/generator";
import { transporter, template } from "$lib/helpers/email";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
  if (locals.user) throw redirect(302, '/');
  if (locals.temp?.status === 2) throw redirect(302, '/register/verify');
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, cookies }: any) => {
        const data = await request.formData();
        const email = data.get("email");

        const uuID = uuid();
        const code = generateNumCode(5);

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
              password: code
          },
          authId: uuID
        });
        await users.updateOne({
          username: user.username
          }, {
            $push: { badge: "unknown" }
        });

        await transporter.sendMail({
          from: '"Squared" squaredofficial@gmail.com',
          to: email,
          subject: "Verify your Email Address!",
          html: template(code)
        });

        cookies.set("verification", uuID, {
          path: '/register',
          httpOnly: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 24 * 30,
        })

        throw redirect(303, "/register/verify");
    }
};
