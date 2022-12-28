<script>
    import OptionsBox from "./OptionsBox.svelte";
    /**
	 * @type {any}
	 */
     export let data;
    $: post = data;
    $: toggle = "scale-0";

    function toggleOptions(){
        if (toggle === "scale-0") toggle = "scale-100";
        else toggle = "scale-0";
    }

    const hide = () => toggle = "scale-0";
</script>

<div class="h-72 w-72 flex drop-shadow-md bg-yellow-100 relative group/post" id={post.id}>
    <div class="w-full h-9 px-3 flex absolute top-0 left-0 bg-yellow-200
        flex-col justify-center items-start">
        <button class="absolute right-0 px-3 hover:scale-110" 
            on:click={toggleOptions} on:blur={hide}>
            <img class="h-4" src="img/options.svg" alt="options">
        </button>
    </div>
    <OptionsBox options={["Remove", "Report"]} toggler={toggle}/>
    <div class="w-full h-64 mt-8 bg-transparent p-3">{post.content}</div>
    <div class="absolute bottom-5 left-4 drop-shadow-md bg-white rounded-lg
        scale-0 hover:bg-blue-400 hover:invert group-hover/post:scale-100">
        <button class="p-2 flex flex-row gap-2
                items-center justify-center text-sm font-bold">
            <img class="h-3" src="img/send.svg" alt="send">
            <p>Publish</p>
        </button>
    </div>
    <div class="absolute bottom-5 right-4 bg-transparent flex flex-row gap-2
        justify-center items-center group-hover/post:scale-0">
        <div class="h-10 flex flex-col items-center justify-center">
            <h1 class="font-bold">{post.author.name}<h1>
            <p class="text-gray-700 text-sm text-right">{post.time}</p>
        </div>
        <img class="h-10 rounded-lg drop-shadow-lg" 
          src={post.author.img ? post.author.img : "img/logo_solid.svg"} 
          alt={post.author.name}>
    </div>
</div>