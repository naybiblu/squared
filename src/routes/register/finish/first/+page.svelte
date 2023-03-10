<script lang="ts">
  import { getAge } from "$lib/helpers/time";

  $: showPassword1 = false;
  $: showPassword2 = false;
  $: data = {
    bday: "",
    pass1: "",
    pass2: "",
    pronoun: "",
    firstName: "",
    lastName: ""
  };
  $: error = {
    pass1: "",
    pass2: "",
    bday: ""
  }
  $: check = false;
  $: {
    if (!Object.values(data).includes("") && Object.values(error).every( v => v === "")) check = true;
    else check = false;
  }

  function passValidator () {
    if (data.pass1 && data.pass2) {
      if (data.pass1.length <= 5) return error.pass1 = "Please create a 6-character password.";
      if (data.pass2.length <= 5) return error.pass2 = "Please create a 6-character password."
      if (data.pass1 !== data.pass2) return error.pass2 = "Please retype your password correctly.";
      error.pass1 = "";
      error.pass2 = "";
    }
  }
  const bdayValidator = () => {
    if (data.bday) {
      if (getAge(data.bday) <= 15) return error.bday = "You are too young to create an account.";
      error.bday = "";
    }
  }
  const togglePass1 = () => showPassword1 = showPassword1 ? false : true;
  const togglePass2 = () => showPassword2 = showPassword2 ? false : true;
  const inputHandle1 = (e: any) => {
    data.pass1 = e.target.value;
    passValidator();
  };
  const inputHandle2 = (e: any) => {
    data.pass2 = e.target.value;
    passValidator();
  };
</script>

<svelte:head>
  <title>Register | Squared</title>
	<meta name="description" content="Join us in our quadrilateral world." />
  <link rel="icon" href="../../img/cube_orange.svg" />
</svelte:head>

<section class="h-screen w-screen flex justify-start font-['ABC-Regular'] overflow-hidden bg-default
  default-bg">
  <div class="h-full w-1/3 backdrop-brightness-50 flex flex-col 
    justify-center items-center sm:w-full text-white">
    <div style="transform: rotate(-90deg); font-size: 6rem;" class="flex flex-col 
      items-start gap-5">
      <img src="../../img/cube.svg" alt="logo" class="a700 h-16 scale-150">
      <h1 class="font-black leading-[1] break-words text-left tracking-wider">
        <span style="color: #D3D3D3;">Finalizing</span><br>
        everything.
      </h1>
    </div>
  </div>
  <div class="h-full w-2/3 bg-white flex justify-self-end
    flex-col gap-4 py-20 pl-16 justify-center">
    <div>
    <div class="flex gap-5 flex-wrap animate-fadeIn">
      <div class="flex-col flex gap-4 justify-center">
        <div class="flex flex-col gap-1">
          <h1 class="font-bold text-3xl">General Info</h1>
          <p class="text-sm opacity-60">Fill the necessary details below!</p>
        </div>
        <div class="flex gap-2">
          <hr style="background: rgb(180 83 9); height: 0.75rem; width: 8rem;" class="rounded-full animate-pulse">
          <hr style="background: #D2D2D2; height: 0.75rem; width: 8rem;" 
            class="rounded-full">
        </div>
      </div>
    </div>
      <form class="relative flex flex-col gap-8 justify-start py-7 animate-fadeIn" method="POST">
        <div class="flex flex-wrap gap-5">
          <input type="text" class="rounded-full px-5 bg-slate-200
            h-10 w-96 sm:w-36 {!data.firstName ? "outline-red-500" : ""}" 
            placeholder="First name" name="firstName" bind:value={data.firstName} required>
          <input type="text" class="rounded-full px-5 bg-slate-200
            h-10 w-96 sm:w-36 {!data.lastName ? "outline-red-500" : ""}" 
            placeholder="Last name" name="lastName" bind:value={data.lastName} required>
          <div class="relative w-96">
            {#if error.bday}
              <div class="absolute -top-[4.4rem] h-16 left-5 flex gap-3 items-end text-left">
                <img src="../../img/warning.svg" alt="warning" class="h-6 animate-pulse peer/bdaywarn">
                <div class="bg-red-500 max-w-[19rem] p-2 rounded-lg text-white scale-0
                  peer-hover/bdaywarn:scale-100 transition-transform origin-left">
                  <p class="text-sm">{error.bday}</p>
                </div>
              </div>
            {/if}
            <input type="date" class="rounded-full px-5 bg-slate-200
              h-10 w-[24.2rem] sm:w-36 {!data.bday ? "outline-red-500" : ""}" 
              name="bday" bind:value={data.bday} on:input={bdayValidator} required>
          </div>
          <select class="rounded-full px-5 bg-slate-200
            h-10 w-96 sm:w-72 {!data.pronoun ? "outline-red-500" : ""}" 
            name="pronouns" bind:value={data.pronoun} required 
            style="appearance: none; -webkit-appearance:none;">
            <option selected disabled value="">Pronouns</option> 
            <option value="He/him">He/him</option>
            <option value="She/her">She/her</option>
            <option value="They/them">They/them</option>
          </select>
        <div class="flex gap-1 flex-row relative">
          {#if error.pass1}
            <div class="absolute -top-[4.4rem] h-16 left-5 flex gap-3 items-end">
              <img src="../../img/warning.svg" alt="warning" class="h-6 animate-pulse peer/p1warn">
              <div class="bg-red-500 max-w-[19rem] p-2 rounded-lg text-white scale-0
                peer-hover/p1warn:scale-100 transition-transform origin-left">
                <p class="text-sm">{error.pass1}</p>
              </div>
            </div>
          {/if}
          <input type={showPassword1 ? "text" : "password"} class="rounded-l-full px-5 bg-slate-200
            h-10 w-[21.3rem] {!data.pass1 || error.pass1 ? "outline-red-500" : ""}" 
            placeholder="Password" name="passwordTrue" on:input={inputHandle1}>
            <button class="rounded-r-full bg-slate-200 h-10 w-10 hover:bg-amber-700 flex
              justify-center items-center group/eye" on:click={togglePass1} type="button">
                <img src="../../img/{showPassword1 ? "eyehide" : "eyeshow"}.svg" 
                alt={showPassword1 ? "show" : "hide"} class="h-6 mr-1 group-hover/eye:invert">
            </button>
        </div>
        <div class="flex gap-1 flex-row relative">
          {#if error.pass2}
            <div class="absolute -top-[4.4rem] h-16 left-5 flex gap-3 items-end">
              <img src="../../img/warning.svg" alt="warning" class="h-6 animate-pulse peer/p1warn">
              <div class="bg-red-500 max-w-[19rem] p-2 rounded-lg text-white scale-0
                peer-hover/p1warn:scale-100 transition-transform origin-left">
                <p class="text-sm">{error.pass2}</p>
              </div>
            </div>
          {/if}
          <input type={showPassword2 ? "text" : "password"} class="rounded-l-full px-5 bg-slate-200
            h-10 w-[21.3rem] {!data.pass1 || error.pass1 ? "outline-red-500" : ""}" 
            placeholder="Confirm password" name="password2" on:input={inputHandle2}>
            <button class="rounded-r-full bg-slate-200 h-10 w-10 hover:bg-amber-700 flex
              justify-center items-center group/eye" on:click={togglePass2} type="button">
                <img src="../../img/{showPassword2 ? "eyehide" : "eyeshow"}.svg" 
                alt={showPassword2 ? "show" : "hide"} class="h-6 mr-1 group-hover/eye:invert">
            </button>
        </div>
      </div>
        <button type={!check ? "button" : "submit"} class="rounded-full px-5 bg-amber-700
          h-10 w-56 text-white font-bold sm:w-36
          {!check ? "opacity-50 cursor-default" : "hover:bg-slate-300 hover:text-black cursor-pointer"}" 
          id="next">Next</button>
      </form>
    </div>
  </div>
</section>
