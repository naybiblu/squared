import { model as users } from "$lib/database/models/user";
import { redirect } from '@sveltejs/kit';
import { uploadImage } from "$lib/helpers/discord";
import { rawFileToBuffer } from "$lib/helpers/image";

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
  if (locals.user) throw redirect(302, '/');
  if (!locals.temp) throw redirect(302, "/register/start");
  const user = await users.findOne({ "credentials.email": locals.temp.email });
  if (user.badge.includes("unknown")) throw redirect(302, "/register/verify");
  if (user.name.first.includes("unknown")) throw redirect(302, "/register/finish/first");
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, locals, cookies }: any) => {
        const data = await request.formData();
        const pfp = data.get("pfp");
        const bio = data.get("bio");
        const user = await users.findOne({ "credentials.email": locals.temp.email });

        if (pfp) {
          const avatar = await rawFileToBuffer(pfp);
          const file = await uploadImage(avatar, user.username.toLowerCase(), 0);

          await users.updateOne({
            "credentials.email": user.credentials.email
          }, {
            "img.avatar": file.url
          });
        }
        
        if (bio) await users.updateOne({
            "credentials.email": user.credentials.email
          }, {
            biodata: bio
          });
        
        cookies.set('verification', '', {
          path: '/register',
          expires: new Date(0),
        });

        cookies.set('verification', '', {
          path: '/register/finish',
          expires: new Date(0),
        });

        throw redirect(303, "/login");

    }
};
