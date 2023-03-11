import { model as users } from "$lib/database/models/user";
import { redirect, fail } from '@sveltejs/kit';
import { v4 as uuid } from "uuid";
import { generateNumCode } from "$lib/helpers/generator";
import { transporter, template } from "$lib/helpers/email";
import { errorLogger } from "$lib/helpers/discord";

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
        const un = data.get("username");

        const uuID = uuid();
        const query = await users.find({
          $or: [
            { "credentials.email": email },
            { "username": un }
          ]
        });
        await errorLogger(query[0]?.username ?? "none");
        const emailCheck = query.map(q => q.credentials.email).includes(email) ? " email" : "";
        const unCheck = query.map(q => q.username.toLowerCase()).includes(un.toLowerCase()) ? " username" : "";
        const linker = emailCheck && unCheck;
        const code = generateNumCode(5);

        if (query.length !== 0) return fail(469, { error: `The${emailCheck} ${linker ? "and" : ""}${unCheck} ${linker ? "are" : "is"} already taken.`});
        const user = await users.create({
          name: {
            first: "unknown",
            last: "unknown"
          },
          username: un,
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
          subject: `Verify your account, ${un}!`,
          html: template(code)
        });

        cookies.set("verification", uuID, {
          path: '/register',
          httpOnly: true,
          sameSite: 'strict',
          maxAge: 60 * 60 * 24,
        })

        throw redirect(303, "/register/verify");
    }
};
