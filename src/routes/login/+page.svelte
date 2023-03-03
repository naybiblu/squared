<script lang="ts">
  import Underline from "$lib/components/Underline.svelte";

  /** @type {import('./$types').ActionData} */
  export let form: any;
  
  $: showPassword = false;
  $: email = "";
  $: pwd = "";
  $: error = form?.error;

  const togglePass = () => showPassword = showPassword ? false : true;
  $: reset = (e: any) => {
    setTimeout(() => { 
      e.querySelectorAll(".wiggle")?.forEach((w: any) => {
        if (w.id === "pass") w.childNodes[0].classList.remove("animate-wiggle");
        else w.classList.remove("animate-wiggle")
      });
      error = "";
    }, 500);
  };
  const inputHandle = (e: any) => {
    pwd = e.target.value;
  };
  const validator = (e: any) => {
    const { parentNode: element } = e.target;
    if (!email && !pwd) element.querySelectorAll(".wiggle")?.forEach((w: any) => {
        if (w.id === "pass") w.childNodes[0].classList.add("animate-wiggle");
        else w.classList.add("animate-wiggle")
    });
    if (!email && pwd) element.childNodes[0]?.classList.add("animate-wiggle");
    if (email && !pwd) element.childNodes[2]?.childNodes[0].classList.add("animate-wiggle");
    reset(element);
  };
</script>

<svelte:head>
  <title>Log in | Squared</title>
	<meta name="description" content="Why not log in first before doing $#!7?">
</svelte:head>

<section class="h-screen w-screen flex justify-start font-['ABC-Regular'] overflow-hidden bg-default
  default-bg">
  <div class="h-full w-1/3 bg-white flex flex-col p-10 gap-3 justify-center items-center sm:w-full
    text-center">
    <div class="flex flex-col justify-center gap-2">
      <img src="img/cube.svg" alt="squared" class="a700 h-16">
      <h1 class="text-4xl font-extrabold">Log in to your account.</h1>
    </div>
    <hr class="bg-gray-300 h-1 w-60 rounded-full my-3">
    {#if error}
      <div class="bg-red-200 w-72 p-5 text-left rounded-xl flex items-center justify-center">
        <p class="break-words">{error}</p>
      </div>
    {/if}
    <form class="flex flex-col justify-center items-center gap-3" method="POST">
      <input type="email" class="rounded-full px-5 bg-slate-200
        h-10 w-72 wiggle" placeholder="Email" name="email" bind:value={email} id="email">
      <div class="flex gap-1 flex-row wiggle" id="pass">
        <input type={showPassword ? "text" : "password"} class="rounded-l-full px-5 bg-slate-200
          h-10 w-60 border" placeholder="Password" name="pass" on:input={inputHandle}>
        <button class="rounded-r-full bg-slate-200 h-10 w-10 hover:bg-amber-700 flex
          justify-center items-center group/eye" on:click={togglePass} type="button">
            <img src="img/{showPassword ? "eyehide" : "eyeshow"}.svg" 
            alt={showPassword ? "show" : "hide"} class="h-6 mr-1 group-hover/eye:invert">
        </button>
      </div>
      <button type={!email || !pwd || error ? "button" : "submit"} class="rounded-full px-5 bg-amber-700
        h-10 w-36 text-white font-bold hover:bg-slate-300
        hover:text-black" on:click={validator}>Log in</button>
    </form>
    <hr class="bg-gray-300 h-1 w-60 rounded-full my-3">
    <p>
      No account? Wtf, then 
      <a href="/register/start" class="decoration-none hover-underline-animation
        after:bg-amber-700 text-amber-700 font-bold">
        <Underline text={"register here"}/></a>!
    </p>
  </div>
  <div class="h-full w-2/3 backdrop-brightness-50 flex justify-self-end
    flex-col gap-5 text-white p-32 sm:hidden">
    <h1 class="font-black text-5xl leading-[1] break-words">
      Think of a square <br>
      and isolate yourself into it.
    </h1>
    <p class="text-xl">
      It's not alone. You're just
      <span class="after:bg-amber-700
        hover:font-extrabold">
        <Underline text={"#squared"} color="text-white"/>
      </span>.
    </p>
    <!--<div class="flex justify-end absolute bottom-5 right-5
      scale-150"><Loader/></div>-->
  </div>
</section>
