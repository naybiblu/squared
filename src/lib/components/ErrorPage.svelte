<script lang="ts">
	export let code: any;
	export let message: string | undefined;
	export let backToHome: boolean = true;

	let status: string[], hour: number, color: string;
	$: {
		status = String(code).split('');
		hour = (new Date()).getHours();
		color = "";

		if (hour >= 18) color = "#14168d";
		else color = "#6366F1";
	};
</script>

<svelte:head>
	<title>{code} | Squared</title>
	<meta name="description" content={message} />
	<link rel="icon" href="https://i.imgur.com/As1cV7X.png" />
</svelte:head>

<section class="relative h-screen w-screen flex justify-center overflow-hidden items-center"
	style="background: {color};">
	<img
		src="../img/error_bg.svg"
		alt="error"
		class="w-full lg:h-full absolute xs:h-max
		md:h-max bottom-0 sm:h-max"
	/>
	<div
		class="absolute lg:left-12 xl:left-12 xs:left-0 lg:top-20 xl:top-20 flex flex-col
    xs:flex xs:items-center xs:w-full lg:w-max xs:text-center text-white xl:w-max
    2xl:left-12 2xl-top-20 2xl:w-max"
	>
		<h1
			class="font-extrabold text-9xl tracking-[-0.75rem]"
			style="text-shadow: -10px 3px rgb(105 115 250); font-family: 'ABC-Regular';"
		>
			{#each status as char, i}
				<span class="z-{i}00">{char}</span>
			{/each}
		</h1>
		<div class="flex flex-col gap-3">
			<p class="text-lg w-56">{message}</p>
			<a href={backToHome ? '/' : '/login'}>
				<button class="px-5 py-2 rounded-full bg-amber-600 font-bold hover:opacity-70">
					Go home
				</button>
			</a>
		</div>
	</div>
</section>
