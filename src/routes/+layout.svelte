<script>
	/** @type {import('./$types').PageData} */
	//export let data;

	import Navbar from '$lib/components/Navbar.svelte';
	import "../app.css";
	import { page } from "$app/stores";

	$: path = $page.url.pathname;

	let paths = [
		"/",
		//data ? `/${data.user.username}` : ""
	];
	/**
	 * @type {number}
	 */
	let index;

	switch(path) {
		case "/": index = 1; break;
		case "/secret": index = 2; break;
		case "/notes": index = 3; break;
	}
</script>

<div class="flex flex-col h-screen overflow-y-hidden">
	{#if paths.includes(path)}
		<Navbar page={index}/>
		<main class="flex mt-8 h-screen z-0 flex-col">
			<slot />
		</main>
	{:else}
		<main class="h-screen z-0">
			<slot />
		</main>
	{/if}
	<slot/>
</div>
