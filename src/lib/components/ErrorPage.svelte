<script lang="ts">
    export let code: any;
    export let message: string | undefined;
    export let backToHome: boolean = true;

    $: status = String(code).split("");
</script>

<svelte:head>
  <title>{code} | Squared</title>
	<meta name="description" content={message}>
  <link rel="icon" href="../img/cube_orange.svg" />
</svelte:head>

<section class="h-screen w-screen flex justify-center overflow-hidden items-center bg-[#6366F1]">
  <img src="../img/error_bg.svg" alt="error" class="lg:w-full sm:bottom-5 lg:h-full sm:absolute sm:h-max
    md:-bottom-8 md:absolute">
  <div class="absolute lg:left-12 xl:left-12 sm:left-0 lg:top-20 xl:top-20 flex flex-col
    sm:flex sm:items-center sm:w-full lg:w-max sm:text-center text-white xl:w-max
    2xl:left-12 2xl-top-20 2xl:w-max">
      <h1 class="font-extrabold text-9xl tracking-[-0.75rem]" 
      style="text-shadow: -10px 3px rgb(105 115 250); font-family: 'ABC-Regular';">
      {#each status as char, i}
        <span class="z-{i}00">{char}</span>
      {/each}
      </h1>
      <div class="flex flex-col gap-3">
        <p class="text-lg w-56">{message}</p>
        <a href={backToHome ? "/" : "/login"}>
          <button class="px-5 py-2 rounded-full bg-amber-600 font-bold hover:opacity-70 drop-shadow-md">
            Go home
          </button>
        </a>
      </div>
      
  </div>
</section>