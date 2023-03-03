import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
  if (locals.user) throw redirect(302, '/');
  if (locals.temp) throw redirect(302, "/register/verify");
  else throw redirect(302, "/register/start");
}