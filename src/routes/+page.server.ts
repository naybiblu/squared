import { redirect } from '@sveltejs/kit';
import { model as posts } from '$lib/database/models/post';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }: any) {
	if (!locals?.user) throw redirect(302, '/login');

	const allPosts: any = await posts.find();

	return {
		user: locals?.user,
		post: JSON.stringify({ ...allPosts })
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ cookies }: any) => {
		/*cookies.set('session', '', {
			path: '',
			expires: new Date(0)
		});*/
		cookies.delete('session')

		throw redirect(303, '/login');
	}
};
