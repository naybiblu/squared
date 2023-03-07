<script lang="ts">
  import FileUpload from "$lib/components/FileUpload.svelte";
  import { invalidate } from "$app/navigation";

  /** @type {import('./$types').ActionData} 
  export let form: any;*/

  /** @type {import('./$types').PageData} */
  export let data: any;
  const { users } = data;
  if (!users) invalidate("/register/finish");
  
  $: last = false;
  $: showPassword1 = false;
  $: showPassword2 = false;
  $: data = {
    bday: "",
    pass1: "",
    pass2: "",
    username: "",
    pronoun: "",
    firstName: "",
    lastName: ""
  };
  $: error = {
    pass1: "",
    pass2: "",
    username: "",
  }
  $: check = false;
  $: {
    if (!Object.values(data).includes("") && Object.values(error).every( v => v === "")) check = true;
    else check = false;
  }

  const usernameChecker = (username: string) => {
    if (!username || username === undefined || !users || users === undefined) return false;
    let match = false;
    for (const user of Object.values(JSON.parse(users)) as any) {
      if (user.username.toLowerCase() === username.toLowerCase()) {
        match = true;
        break;
      }
    }
    return match;
  };
  const usernameValidator = () => {
    if (data.username) {
      if (data.username.length <= 5) return error.username = "It should be 6 characters and above for length."
      if (usernameChecker(data.username)) return error.username = "This username is already taken.";
      if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(data.username)) return error.username = "Username should not contain any special characters.";
      error.username = "";
    }
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
  const loadPhoto = (e: any) => {
    const target = e.target.parentNode.childNodes[0];
    target.src = URL.createObjectURL(e.target.files[0]);
  };
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
  const toggle = () => last = last ? false : true;
</script>

<svelte:head>
  <title>Register | Squared</title>
	<meta name="description" content="Join us in our quadrilateral world." />
  <link rel="icon" href="../img/cube_orange.svg" />
</svelte:head>

<section class="h-screen w-screen flex justify-start font-['ABC-Regular'] overflow-hidden bg-default
  default-bg">
  <div class="h-full w-1/3 backdrop-brightness-50 flex flex-col 
    justify-center items-center sm:w-full text-white">
    <div style="transform: rotate(-90deg); font-size: 6rem;" class="flex flex-col 
      items-start gap-5">
      <img src="../img/cube.svg" alt="logo" class="a700 h-16 scale-150">
      <h1 class="font-black leading-[1] break-words text-left tracking-wider">
        <span style="color: #D3D3D3;">Finalizing</span><br>
        everything.
      </h1>
    </div>
  </div>
  {#key last}
  <div class="h-full w-2/3 bg-white flex justify-self-end
    flex-col gap-4 py-20 pl-16 justify-center">
    <div>
    <div class="flex gap-5 flex-wrap">
      <div class="flex-col flex gap-4 justify-center">
        <div class="flex flex-col gap-1">
          <h1 class="font-bold text-3xl">{last ? "Fancy Things" : "General Info"}</h1>
          <p class="text-sm opacity-60">{last ? "Make your profile (we call 'em square) identifiable!" : "Fill the necessary details below!"}</p>
        </div>
        <div class="flex gap-2">
          <hr style="background: rgb(180 83 9); height: 0.75rem; width: 8rem;" class="rounded-full">
          <hr style="background: {last ? "rgb(180 83 9)" : "#D2D2D2"}; height: 0.75rem; width: 8rem;" 
            class="rounded-full">
        </div>
      </div>
    </div>
    {#if last}
      <form class="flex flex-col gap-8 py-5">
        <div class="flex flex-wrap gap-16">
          <div class="flex flex-col items-center w-60 gap-5 justify-center">
            <img src="../img/unknown.svg" alt="uploadedPhoto" class="h-36 border-slate-200
              bg-slate-200 rounded-full w-36" style="aspect-ratio: 1 / 1;">
            <FileUpload displayScript={loadPhoto}/>
          </div>
          <div>
            <textarea class="resize-none outline-none bg-slate-200 rounded-lg h-56 w-96
              p-5" placeholder="Bio" name="bio"></textarea>
          </div>
          <input type="hidden" name="fName" value={data.firstName}>
          <input type="hidden" name="lName" value={data.lastName}>
          <input type="hidden" name="username" value={data.username.toLowerCase()}>
          <input type="hidden" name="bday" value={(new Date(data.bday)).getTime()}>
          <input type="hidden" name="pronouns" value={data.pronoun}>
          <input type="hidden" name="pass" value={data.pass1}>
        </div>
        <div class="flex flex-wrap gap-5">
          <button type={error ? "button" : "submit"} class="rounded-full px-5 bg-amber-700
            h-10 w-56 text-white font-bold hover:bg-slate-300
            hover:text-black sm:w-36" on:click={toggle}>Previous</button>
          <button type={error ? "button" : "submit"} class="rounded-full px-5 bg-amber-700
            h-10 w-56 text-white font-bold hover:bg-slate-300
            hover:text-black sm:w-36">Register</button>
        </div>
      </form>
    {:else}
      <form class="relative flex flex-col gap-8 justify-start py-5">
        <div class="flex flex-wrap gap-5">
          <div>
            <input type="text" class="rounded-l-full px-5 bg-slate-200
              h-10 w-48 sm:w-36 {!data.firstName ? "outline-red-500" : ""}" 
              placeholder="First name" name="first name" bind:value={data.firstName} required>
            <input type="text" class="rounded-r-full px-5 bg-slate-200
              h-10 w-48 sm:w-36 {!data.lastName ? "outline-red-500" : ""}" 
              placeholder="Last name" name="last name" bind:value={data.lastName} required>
          </div>
          <div class="relative w-96">
            {#if error.username}
              <div class="absolute -top-[4.4rem] h-16 left-5 flex gap-3 items-end">
                <img src="../img/warning.svg" alt="warning" class="h-6 animate-pulse peer/unwarn">
                <div class="bg-red-500 max-w-[19rem] p-2 rounded-lg text-white scale-0
                  peer-hover/unwarn:scale-100 transition-transform origin-left">
                  <p class="text-sm">{error.username}</p>
                </div>
              </div>
            {/if}
            <input type="text" class="rounded-full px-5 bg-slate-200
            h-10 w-full sm:w-72 {!data.username || error.username ? "outline-red-500" : ""}" 
            placeholder="Username" name="username" bind:value={data.username} required
            on:input={usernameValidator}> 
          </div>
          <input type="date" class="rounded-full px-5 bg-slate-200
            h-10 w-[24.2rem] sm:w-72 {!data.bday ? "outline-red-500" : ""}" 
            name="bday" bind:value={data.bday} required>
          <select class="rounded-full px-5 bg-slate-200
            h-10 w-96 sm:w-72 {!data.pronoun ? "outline-red-500" : ""}" 
            name="username" bind:value={data.pronoun} required 
            style="appearance: none; -webkit-appearance:none;">
            <option selected disabled value="">Pronouns</option> 
            <option value="He/him">He/him</option>
            <option value="She/her">She/her</option>
            <option value="They/them">They/them</option>
          </select>
        <div class="flex gap-1 flex-row relative">
          {#if error.pass1}
            <div class="absolute -top-[4.4rem] h-16 left-5 flex gap-3 items-end">
              <img src="../img/warning.svg" alt="warning" class="h-6 animate-pulse peer/p1warn">
              <div class="bg-red-500 max-w-[19rem] p-2 rounded-lg text-white scale-0
                peer-hover/p1warn:scale-100 transition-transform origin-left">
                <p class="text-sm">{error.pass1}</p>
              </div>
            </div>
          {/if}
          <input type={showPassword1 ? "text" : "password"} class="rounded-l-full px-5 bg-slate-200
            h-10 w-[21.3rem] {!data.pass1 || error.pass1 ? "outline-red-500" : ""}" 
            placeholder="Password" name="password" on:input={inputHandle1}>
            <button class="rounded-r-full bg-slate-200 h-10 w-10 hover:bg-amber-700 flex
              justify-center items-center group/eye" on:click={togglePass1} type="button">
                <img src="../img/{showPassword1 ? "eyehide" : "eyeshow"}.svg" 
                alt={showPassword1 ? "show" : "hide"} class="h-6 mr-1 group-hover/eye:invert">
            </button>
        </div>
        <div class="flex gap-1 flex-row relative">
          {#if error.pass2}
            <div class="absolute -top-[4.4rem] h-16 left-5 flex gap-3 items-end">
              <img src="../img/warning.svg" alt="warning" class="h-6 animate-pulse peer/p1warn">
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
                <img src="../img/{showPassword2 ? "eyehide" : "eyeshow"}.svg" 
                alt={showPassword2 ? "show" : "hide"} class="h-6 mr-1 group-hover/eye:invert">
            </button>
        </div>
      </div>
        <button type="button" class="rounded-full px-5 bg-amber-700
          h-10 w-56 text-white font-bold sm:w-36 cursor-pointer
          {!check ? "hidden" : "hover:bg-slate-300 hover:text-black"}" 
          on:click={toggle}>Next</button>
      </form>
    {/if}
    </div>
  </div>
  {/key}
</section>
