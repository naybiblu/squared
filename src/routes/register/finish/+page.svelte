<script lang="ts">
  import FileUpload from "$lib/components/FileUpload.svelte";

  /** @type {import('./$types').ActionData} */
  export let form: any;
  
  $: last = false;
  $: showPassword1 = false;
  $: showPassword2 = false;
  $: error = form?.error;
  $: data = {
    bday: "",
    pass1: "",
    pass2: "",
    username: "",
    pronoun: "",
    firstName: "",
    lastName: ""
  };

  const loadPhoto = (e: any) => {
    const target = e.target.parentNode.childNodes[0];
    target.src = URL.createObjectURL(e.target.files[0]);
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
    last = true;
  }
  const previous = () => last = false;
</script>

<svelte:head>
  <title>Register | Squared</title>
	<meta name="description" content="Join us in our quadrilateral world." />
  <link rel="icon" href="../img/logo_official.svg" />
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
  <div class="h-full w-2/3 bg-white flex justify-self-end
    flex-col gap-4 py-20 pl-16 justify-center">
    <div class="flex flex-col gap-1">
      <h1 class="font-bold text-3xl">{last ? "Fancy Things" : "General Info"}</h1>
      <p class="text-sm opacity-60">{last ? "Make your profile (we call 'em square) identifiable!" : "Fill the necessary details below!"}</p>
    </div>
    <div class="flex gap-2">
      <hr style="background: rgb(180 83 9); height: 0.75rem; width: 8rem;" class="rounded-full">
      <hr style="background: {last ? "rgb(180 83 9)" : "#D2D2D2"}; height: 0.75rem; width: 8rem;" 
        class="rounded-full">
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
        </div>
        <div class="flex flex-wrap gap-5">
          <button type={nullChecker() || error ? "button" : "submit"} class="rounded-full px-5 bg-amber-700
            h-10 w-56 text-white font-bold hover:bg-slate-300
            hover:text-black sm:w-36" on:click={previous}>Previous</button>
          <button type={nullChecker() || error ? "button" : "submit"} class="rounded-full px-5 bg-amber-700
            h-10 w-56 text-white font-bold hover:bg-slate-300
            hover:text-black sm:w-36" on:click={validator}>Register</button>
        </div>
        
      </form>
    {:else}
      <form class="relative flex flex-col gap-8 justify-start py-5">
        <div class="flex flex-wrap gap-5">
          <div>
            <input type="text" class="rounded-l-full px-5 bg-slate-200
              h-10 w-48 sm:w-36" placeholder="First name" name="first name" bind:value={data.firstName} required>
            <input type="text" class="rounded-r-full px-5 bg-slate-200
              h-10 w-48 sm:w-36" placeholder="Last name" name="last name" bind:value={data.lastName} required>
          </div>
          <input type="text" class="rounded-full px-5 bg-slate-200
            h-10 w-96 sm:w-72" placeholder="Username" name="username" bind:value={data.username} required> 
          <input type="date" class="rounded-full px-5 bg-slate-200
            h-10 w-[24.2rem] sm:w-72" name="bday" bind:value={data.bday} required>
          <select class="rounded-full px-5 bg-slate-200
            h-10 w-96 sm:w-72" name="username" bind:value={data.pronoun} required 
            style="appearance: none; -webkit-appearance:none;">
            <option selected disabled value="">Pronouns</option> 
            <option value="He/him">He/him</option>
            <option value="She/her">She/her</option>
            <option value="They/them">They/them</option>
          </select>
        <div class="flex gap-1 flex-row">
          <input type={showPassword1 ? "text" : "password"} class="rounded-l-full px-5 bg-slate-200
            h-10 w-[21.3rem]" placeholder="Password" name="password" on:input={inputHandle1}>
            <button class="rounded-r-full bg-slate-200 h-10 w-10 hover:bg-amber-700 flex
              justify-center items-center group/eye" on:click={togglePass1} type="button">
                <img src="../img/{showPassword1 ? "eyehide" : "eyeshow"}.svg" 
                alt={showPassword1 ? "show" : "hide"} class="h-6 mr-1 group-hover/eye:invert">
            </button>
          </div>
        <div class="flex gap-1 flex-row">
          <input type={showPassword2 ? "text" : "password"} class="rounded-l-full px-5 bg-slate-200
            h-10 w-[21.3rem]" placeholder="Confirm password" name="password2" on:input={inputHandle2}>
            <button class="rounded-r-full bg-slate-200 h-10 w-10 hover:bg-amber-700 flex
              justify-center items-center group/eye" on:click={togglePass2} type="button">
                <img src="../img/{showPassword2 ? "eyehide" : "eyeshow"}.svg" 
                alt={showPassword2 ? "show" : "hide"} class="h-6 mr-1 group-hover/eye:invert">
            </button>
        </div>
      </div>
        <button type={nullChecker() || error ? "button" : "submit"} class="rounded-full px-5 bg-amber-700
          h-10 w-56 text-white font-bold hover:bg-slate-300
          hover:text-black sm:w-36" on:click={validator}>Next</button>
      </form>
    {/if}
  </div>
</section>
