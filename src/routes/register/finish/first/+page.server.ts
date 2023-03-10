import { model as users } from "$lib/database/models/user";
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
  if (locals.user) throw redirect(302, '/');
  if (!locals.temp) throw redirect(302, "/register/start");
  const user = await users.findOne({ "credentials.email": locals.temp.email });
  if (user.badge.includes("unknown")) throw redirect(302, "/register/verify");
  if (!user.name.first.includes("unknown")) throw redirect(302, "/register/finish/last");
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, locals }: any) => {
        const data = await request.formData();
        const fName = data.get("firstName");
        const lName = data.get("lastName");
        const bday = (new Date(data.get("bday"))).getTime()
        const pronouns = data.get("pronouns");
        const pass = data.get("passwordTrue");

        await users.updateOne({
            "credentials.email": locals.temp.email
          }, {
            name: {
              first: fName,
              last: lName
            },
            bday: bday,
            pronoun: pronouns,
            "credentials.password": pass
        });
        
        await users.updateOne({
            "credentials.email": locals.temp.email
          }, {
            $push: { badge: "newbie" }
        });

        await users.updateOne({
            "credentials.email": locals.temp.email
          }, {
            $pull: { badge: "email" }
        });

        throw redirect(303, "/register/finish/last");
    }
};
