<script lang="ts">
	export let code: any;
	export let message: string | undefined;
	export let backToHome: boolean = true;

	$: status = String(code).split('');
</script>

<svelte:head>
	<title>{code} | Squared</title>
	<meta name="description" content={message} />
	<link rel="icon" href="https://i.imgur.com/As1cV7X.png" />
</svelte:head>

<section class="h-screen w-screen flex justify-center overflow-hidden items-center bg-[#6366F1]">
	<!--<img
		src="../img/error_bg.svg"
		alt="error"
		class="lg:w-full xs:bottom-0 lg:h-full xs:fixed xs:h-max
    md:-bottom-8 md:fixed"
	/>-->
	<div class="lg:w-full xs:bottom-0 lg:h-full xs:fixed xs:h-max
    md:-bottom-8 md:fixed">
		<svg id="e4idcYutLEG1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" width="1920" height="1080"><rect width="2003.300142" height="1149.13229" rx="0" ry="0" transform="matrix(1.695356 0 0 1.533474-730.472094-356.78574)" fill="#6366F1" stroke-width="0"/><g transform="matrix(2.099473 0 0 1.627213-1038.82164-387.617096)"><path d="M1686.657182,841.877666L1281.081081,341.052633L1087.510668,980.142247l599.146514-138.264581Z" transform="translate(0 0.000001)" fill="#f8e800" stroke-width="3.84"/><path d="M893.940254,841.877665L1281.08108,341.052632L1087.510667,980.142246L893.940254,841.877665Z" transform="translate(.000001 0.000002)" fill="#e6ad00" stroke-width="3.84"/></g><g transform="matrix(1.665202 0 0 1.345209-1142.341254-155.021445)"><path d="M1686.657182,841.877666L1281.081081,341.052633L1087.510668,980.142247l599.146514-138.264581Z" transform="translate(0 0.000001)" fill="#fff34c" stroke-width="3.84"/><path d="M893.940254,841.877665L1281.08108,341.052632L1087.510667,980.142246L893.940254,841.877665Z" transform="translate(.000001 0.000002)" fill="#ffc30e" stroke-width="3.84"/></g><g transform="matrix(1.218786 0 0 1.345209 243.793963-105.822885)"><path d="M1686.657182,841.877666L1281.081081,341.052633L1087.510668,980.142247l599.146514-138.264581Z" transform="translate(0 0.000001)" fill="#fff01d" stroke-width="3.84"/><path d="M893.940254,841.877665L1281.08108,341.052632L1087.510667,980.142246L893.940254,841.877665Z" transform="translate(.000001 0.000002)" fill="#ffc000" stroke-width="3.84"/></g><rect width="2104.694168" height="313.399716" rx="0" ry="0" transform="matrix(1.928657 0 0 1.97442-1038.699046 782.818738)" fill="#fa8128" stroke-width="0"/><g transform="matrix(.999587-.028732 0.028732 0.999587-244.812838-37.511468)"><path d="M1403.955913,949.077082L1234.992886,577.638699L1169.24175,953.323921l234.714163-4.246839Z" transform="translate(0 0.000001)" fill="#e8d800" stroke-width="3.84"/><path d="M1022.987195,912.546238l212.00569-334.90754-65.6303,371.481331-146.37539-36.573791Z" transform="translate(.000001 0.000002)" fill="#cf9c00" stroke-width="3.84"/></g><g transform="translate(23.194397 28.957958)"><path d="M1686.657182,841.877666L1281.081081,341.052633L1087.510668,980.142247l599.146514-138.264581Z" transform="translate(0 0.000001)" fill="#fe0" stroke-width="3.84"/><path d="M893.940254,841.877665L1281.08108,341.052632L1087.510667,980.142246L893.940254,841.877665Z" transform="translate(.000001 0.000002)" fill="#e6ad00" stroke-width="3.84"/></g></svg>
	</div>
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
