<script lang="ts">
  import Underline from "$lib/components/Underline.svelte";
  /** @type {import('./$types').ActionData} */
  export let form: any;

  $: showPassword1 = false;
  $: showPassword2 = false;
  $: error = form?.error;
  $: data = {
    email: "",
    pass1: "",
    pass2: "",
    username: "",
    firstName: "",
    lastName: ""
  };
  
  const togglePass1 = () => showPassword1 = showPassword1 ? false : true;
  const togglePass2 = () => showPassword2 = showPassword2 ? false : true;
  const reset = () => {
    setTimeout(() => { error = "" }, 7000);
  };
  const inputHandle1 = (e: any) => {
    data.pass1 = e.target.value;
  };
  const inputHandle2 = (e: any) => {
    data.pass2 = e.target.value;
  };
  $: nullChecker = () => { return Object.values(data).includes("")}
  const validator = () => {
    if (nullChecker()) error = `You are missing the following: ${Object.entries(data)
      .filter(([k, v]) => v === "" && k !== "pass2" && k !== "firstName")
      .map(([k, v]) => k.includes("pass") ? "password" : k.includes("lastName") ? "name" : k).join(", ")}.`;
    if (data.pass1 !== data.pass2) error = "Please retype your password correctly!";
    if (data.pass1.length <= 8) error = "Your password is too short! It should be 9-character long.";
    reset();
  }

  reset();
</script>

<svelte:head>
  <title>Register | Squared</title>
	<meta name="description" content="Join us in our quadrilateral world." />
</svelte:head>

<section class="h-full w-full flex justify-center items-center font-['ABC-Regular'] overflow-hidden
  bg-default default-bg">
  <div class="w-2/5 bg-white flex flex-col p-5 gap-3 justify-center items-center sm:w-full
    text-center rounded-3xl">
    <div class="flex flex-col justify-center gap-2">
      <img src="img/cube.svg" alt="squared" class="a700 h-16">
      <h1 class="text-4xl font-extrabold">Register time!</h1>
    </div>
    
    <hr class="bg-gray-300 h-1 w-60 rounded-full my-3">
    {#if error}
    <div class="bg-red-200 w-72 p-5 text-left rounded-xl flex items-center justify-center">
      <p class="break-words">{error}</p>
    </div>
    {/if}
    <form class="flex flex-col justify-center items-center gap-3" method="POST">
      <div class="flex flex-row gap-1">
        <input type="text" class="rounded-l-full px-5 bg-slate-200
          h-10 w-48 sm:w-36" placeholder="First name" name="first name" bind:value={data.firstName}>
        <input type="text" class="rounded-r-full px-5 bg-slate-200
          h-10 w-48 sm:w-36" placeholder="Last name" name="last name" bind:value={data.lastName}>
      </div>
      <input type="text" class="rounded-full px-5 bg-slate-200
        h-10 w-96 sm:w-72" placeholder="Username" name="username" bind:value={data.username}>
      <input type="email" class="rounded-full px-5 bg-slate-200
        h-10 w-96 sm:w-72" placeholder="Email" name="email" bind:value={data.email}>
      <div class="flex gap-1 flex-row">
        <input type={showPassword1 ? "text" : "password"} class="rounded-l-full px-5 bg-slate-200
          h-10 w-[21.3rem]" placeholder="Password" name="password" on:input={inputHandle1}>
          <button class="rounded-r-full bg-slate-200 h-10 w-10 hover:bg-amber-700 flex
            justify-center items-center group/eye" on:click={togglePass1} type="button">
              <img src="img/{showPassword1 ? "eyehide" : "eyeshow"}.svg" 
              alt={showPassword1 ? "show" : "hide"} class="h-6 mr-1 group-hover/eye:invert">
          </button>
      </div>
      <div class="flex gap-1 flex-row">
        <input type={showPassword2 ? "text" : "password"} class="rounded-l-full px-5 bg-slate-200
          h-10 w-[21.3rem]" placeholder="Confirm password" name="password2" on:input={inputHandle2}>
          <button class="rounded-r-full bg-slate-200 h-10 w-10 hover:bg-amber-700 flex
            justify-center items-center group/eye" on:click={togglePass2} type="button">
              <img src="img/{showPassword2 ? "eyehide" : "eyeshow"}.svg" 
              alt={showPassword2 ? "show" : "hide"} class="h-6 mr-1 group-hover/eye:invert">
          </button>
        </div>
      <button type={nullChecker() || error ? "button" : "submit"} class="rounded-full px-5 bg-amber-700
        h-10 w-56 text-white font-bold hover:bg-slate-300
        hover:text-black sm:w-36" on:click={validator}>Register</button>
    </form>
    <hr class="bg-gray-300 h-1 w-60 rounded-full my-3">
    <p>
      <a href="/login" class="decoration-none
        after:bg-amber-700 text-amber-700 font-bold">
        <Underline text={"Log in"}/>
      </a>
      if you have a ducking account already. Tss.
    </p>
  </div>
</section>
