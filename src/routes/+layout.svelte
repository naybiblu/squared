<script>
	/** @type {import('./$types').PageData} */
	//export let data;

	//import Navbar from '$lib/components/Navbar.svelte';
	import "../app.css";
	import { page } from "$app/stores";
	$: path = $page.url.pathname;
	/*let paths = [
		"/",
		data ? `/${data.user.username}` : ""
	];*/
</script>

<div class="flex flex-col min-h-screen">
	<!--{#if paths.includes(path)}
		<Navbar adminMode={data.user.role === "DEV"} data={data}/>
		<Navbar/>
		<main class="flex ml-16 h-screen z-0 flex-col">
			<slot />
		</main>
	{:else}-->
		<main class="h-screen z-0">
			<slot />
		</main>
	<!--{/if}-->
</div>
