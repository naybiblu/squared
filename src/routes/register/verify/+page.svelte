<script lang="ts">
  import Underline from "$lib/components/Underline.svelte";
  /** @type {import('./$types').ActionData} */
  export let form: any;

  $: error = form?.error;
  $: code = {
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: ""
  };
  $: setTimeout(() => error = "", 5000);

  const moveToNext = (e: any) => {
    const { target } = e;
    if (target.value === "") target.previousElementSibling.focus();
    else target.nextElementSibling.focus();
  }
  const moveToButton = (e: any) => {
    const { target } = e;
    if (target.value === "") target.previousElementSibling.focus();
    else target.parentNode.nextElementSibling.focus();
  } 
</script>

<svelte:head>
  <title>Register | Squared</title>
	<meta name="description" content="Join us in our quadrilateral world." />
  <link rel="icon" href="../img/logo_official.svg" />
</svelte:head>

<section class="h-full w-full flex justify-center items-center font-['ABC-Regular'] overflow-hidden
  bg-default default-bg">
  <div class="w-2/5 bg-white flex flex-col p-5 gap-3 justify-center items-center sm:w-full
    text-center rounded-3xl">
    <div class="flex flex-col justify-center gap-2">
      <img src="../img/cube.svg" alt="squared" class="a700 h-16">
      <h1 class="text-4xl font-extrabold">Register time!</h1>
      <p>Check your inbox and input the code!</p>
    </div>
    <hr class="bg-gray-300 h-1 w-60 rounded-full my-3">
    {#if error}
    <div class="bg-red-200 w-72 p-5 text-left rounded-xl flex items-center justify-center">
      <p class="break-words">{error}</p>
    </div>
    {/if}
    <form class="flex flex-col justify-center items-center gap-5" method="POST">
      <div class="flex justify-center items-center gap-3">
        <input type="text" class="rounded-lg p-2 bg-slate-200 text-center text-5xl
          h-20 w-16 sm:w-72" name="first" maxlength="1" bind:value={code.first} on:input={moveToNext}>
        <input type="text" class="rounded-lg p-2 bg-slate-200 text-center text-5xl
          h-20 w-16 sm:w-72" name="second" maxlength="1" bind:value={code.second} on:input={moveToNext}>
        <input type="text" class="rounded-lg p-2 bg-slate-200 text-center text-5xl
          h-20 w-16 sm:w-72" name="third" maxlength="1" bind:value={code.third} on:input={moveToNext}>
        <input type="text" class="rounded-lg p-2 bg-slate-200 text-center text-5xl
          h-20 w-16 sm:w-72" name="fourth" maxlength="1" bind:value={code.fourth} on:input={moveToNext}>
        <input type="text" class="rounded-lg p-2 bg-slate-200 text-center text-5xl
          h-20 w-16 sm:w-72" name="fifth" maxlength="1" bind:value={code.fifth} on:input={moveToButton}>
      </div>
      <button type={Object.values(code).includes("") ? "button" : "submit"} class="rounded-full px-5 bg-amber-700
        h-10 w-56 text-white font-bold 
        {Object.values(code).includes("") ? "opacity-50 cursor-default" : "hover:bg-slate-300 hover:text-black"}
        sm:w-36">Verify</button>
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
