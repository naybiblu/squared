<script lang="ts">
	/** @type {import('./$types').LayoutData} */
	export let data: any;

	import Navbar from '$lib/components/Navbar.svelte';
	import "../app.css";
	import { page } from "$app/stores";

	$: path = $page.url.pathname;

	let paths = [
		"/",
		"/publish"
		//data ? `/${data.user.username}` : ""
	];
	let index: number;

	switch(path) {
		case "/": index = 1; break;
		case "/secret": index = 2; break;
		case "/notes": index = 3; break;
	};
</script>

<div class="flex flex-col h-screen">
	{#if paths.includes(path)}
		<Navbar page={index} data={data}/>
		{#if path === "/publish"}
			<main class="h-screen z-0 overflow-hidden">
				<slot />
			</main>
		{:else}
			<main class="flex mt-16 h-screen z-0 flex-col overflow-x-hidden overflow-y-scroll">
				<slot />
			</main>
		{/if}
	{:else}
		<main class="h-screen z-0 overflow-hidden">
			<slot />
		</main>
	{/if}
</div>