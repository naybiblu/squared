<script lang="ts">
    import OptionsBox from "$lib/components/OptionsBox.svelte";

    export let page = 2;
    $: toggle = "scale-0";

    const toggleOptions = () => {
        if (toggle === "scale-0") toggle = "scale-100";
        else toggle = "scale-0";
    };
    const hide = () => toggle = "scale-0";
    const hideIcon = (e: any) => {
        const button = e.target.parentNode.querySelector("button");
        const img = button.querySelector("img");
        img.src = `img/${img.src.includes("search") ? "return" : "search"}.svg`;
        button.type = "reset";
        button.classList.toggle("cursor-default");
    };
    const submit = (e: any) => {
        if (e.keyCode === "13") e.target.parentNode.parentNode.submit(); console.log("yup!");
    };
</script>

<div class="fixed top-0 h-16 w-screen m-0 z-10 justify-center items-center text-black
    flex bg-gradient-to-r from-amber-700 to-amber-600 shadow-xl drop-shadow-sm">
    <div class="flex justify-between items-center mb-1 w-full px-10">
        <div class="flex justify-start items-center flex-row gap-3">
            <a href="/" class="flex flex-row gap-1 justify-start items-center">
                <img src="img/logo_solid.svg" alt="squared" class="h-12 invert drop-shadow-lg return">
            </a>
            <form method="POST" action="?/search">
                <div class="flex flex-row">
                    <button type="button" class="flex items-center justify-center 
                        bg-white rounded-l-full px-3 cursor-default">
                        <img src="img/search.svg" alt="search" class="h-6 a700">
                    </button>
                    <input type="text" class="bg-white h-10 w-60 rounded-r-full py-5
                        outline-none border-none text-black font-light" 
                        placeholder="Search something..." 
                        on:focus={hideIcon} on:blur={hideIcon} on:keydown={submit}>  
                </div>
            </form>
        </div>
        <div class="flex justify-between items-center w-7/12">
            <div class="flex justify-between items-center">
                <a href="/secret" class="relative flex items-center 
                    justify-center h-24 w-[4.75rem] rounded-b-full {page === 1 ? "bg-white" : ""} 
                    group/tt">
                    <img src="img/feed.svg" alt="feed" class="h-10 group-hover/tt:scale-110 transition-all
                        {page === 1 ? "a700" : "invert"}">
                    <span class="sidebar-tooltip group-hover/tt:scale-100 font-bold text-sm">
                        Feed
                    </span>
                </a>
                <a href="/" class="relative flex items-center 
                    justify-center h-24 w-[4.75rem] rounded-b-full {page === 2 ? "bg-white" : ""} 
                    group/tt">
                    <img src="img/cube.svg" alt="cube" class="h-10 group-hover/tt:scale-110 transition-all
                        {page === 2 ? "a700" : "invert"}">
                    <span class="sidebar-tooltip group-hover/tt:scale-100 font-bold text-sm">
                        Your Square
                    </span>
                </a>
                <a href="/notes" class="relative flex items-center {page === 3 ? "bg-white" : ""}
                    justify-center h-24 w-[4.75rem] rounded-b-fullhover:bg-white 
                    hover:drop-shadow-sm group/tt">
                    <img src="img/note.svg" alt="note" class="h-8 invert
                        group-hover/tt:scale-110 transition-all {page === 3 ? "a700" : "invert"}">
                    <span class="sidebar-tooltip group-hover/tt:scale-100 font-bold text-sm">
                        Notes
                    </span>
                </a>
            </div>
            <div class="flex justify-start items-center flex-row bg-white 
                rounded-full gap-2 px-5 py-1">
                <a href="/">
                    <img src="img/example.jpg" class="h-10 rounded-full" alt="profile">
                </a>
                <button class="group/nav hover:bg-slate-100 rounded-full p-2"
                    on:click={toggleOptions} on:blur={hide}>
                    <img src="img/arrow.svg" class="h-6 a700" alt="menu">
                </button>
            </div>
            <div class="{toggle} absolute right-7 top-4">
                <OptionsBox options={["Logout", "Settings"]} toggler={toggle}/>
            </div>
        </div>
    </div>
</div>

