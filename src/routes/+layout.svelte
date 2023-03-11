<script lang="ts">
	/** @type {import('./$types').LayoutData} */
	export let data: any;

	import Navbar from '$lib/components/Navbar.svelte';
	import ErrorPage from '$lib/components/ErrorPage.svelte';
	import MediaQuery from "svelte-media-query";
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
	{#if $page.status === 500}
		<ErrorPage code={$page.status} message="It seems that you broke the site. Joke lang, hahaha."/>
	{:else}
		{#if paths.includes(path)}
			<!--<MediaQuery query="(max-width: 1023px)" let:matches>
				{#if matches}
					<ErrorPage code="808" message="Naybi says, 'hahahaha, no mobile view po hahaha'" backToHome={false}/>
				{:else}-->
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
				<!--{/if}
			</MediaQuery>-->
		{:else}
			<main class="h-screen z-0 overflow-hidden">
				<slot />
			</main>
		{/if}
	{/if}
</div>