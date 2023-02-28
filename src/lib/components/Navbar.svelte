<script lang="ts">
    export let page = 1;
    export let data: any;

    const { user } = data;

    const toggleOptions = () => document.getElementById("toggle")?.classList.toggle("hidden");
    const hide = () => setTimeout(() => document.getElementById("toggle")?.classList.add("hidden"), 100);
    const hideIcon = (e: any) => {
        const button = e.target.parentNode.querySelector("button");
        const img = button.querySelector("img");
        img.src = `img/${img.src.includes("search") ? "return" : "search"}.svg`;
        button.type = "reset";
        button.classList.toggle("cursor-default");
    };
    const submit = (e: any) => {
        if (e.keyCode === "13") e.target.parentNode.parentNode.submit();
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
                <a href="/" class="relative flex items-center 
                    justify-center h-24 w-[4.75rem] rounded-b-full {page === 1 ? "bg-white" : ""} 
                    group/tt">
                    <img src="img/feed.svg" alt="feed" class="h-10 group-hover/tt:scale-110 transition-all
                        {page === 1 ? "a700" : "invert"}">
                    <span class="sidebar-tooltip group-hover/tt:scale-100 font-bold text-sm">
                        Feed
                    </span>
                </a>
                <a href="/{user.username}" class="relative flex items-center 
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
                rounded-full px-2 py-2 mt-1 hover:bg-slate-100">
                <button class=" group/nav rounded-full"
                    on:click={toggleOptions} on:blur={hide}>
                    <img src={user.avatar ?? "img/unknown.svg"} class="h-9 rounded-full" alt="profile">
                    <span class="absolute bottom-3 right-12 p-[0.25px] bg-white rounded-full 
                        group-hover/nav:bg-slate-100">
                       <img src="img/arrow.svg" class="h-4 a700" alt="menu"> 
                    </span>
                </button>
            </div>
            <div class="absolute right-10 top-20 flex-col bg-slate-200 shadow-sm
            text-sm z-10 rounded-md border-slate-300 border hidden divide-y 
            divide-gray-100 font-bold" id="toggle">
                <div class="w-full px-4 py-2 pt-3">
                    {user.fName} {user.lName}<br>
                    <span class="font-light">@{user.username}</span>
                </div>
                <ul class="py-2 flex flex-col items-start justify-center w-full">
                    {#each [
                        { name: "Settings", link: "/settings" },
                        { name: "Logout", form: true }
                    ] as list}
                        {#if list.form}
                            <li class="hover:bg-white w-full px-4 py-2 
                                {list.name === "Logout" ? "text-amber-700" : ""}">
                                <form method="POST" class="w-full">
                                    <button class="w-full flex flex-col items-start justify-start">
                                        {list.name}
                                    </button>
                                </form>
                            </li>
                        {:else}
                            <a href={list.link ?? "/"} class="hover:bg-white w-full px-4 py-2">
                                <li class="w-full">
                                   {list.name} 
                                </li>
                            </a>
                        {/if}
                    {/each}
                </ul>
            </div>   
        </div>
    </div>
</div>

