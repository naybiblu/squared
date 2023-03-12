/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }: any) {
	return {
		user: locals.user
	};
}
