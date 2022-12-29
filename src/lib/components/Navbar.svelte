<script>
// @ts-nocheck

    export let page = 2;

    const hideIcon = (/** @type {any} */ e) => {
        const icon = e.target.parentNode.querySelector("div");
        const image = e.target.parentNode.parentNode.parentNode.querySelector(".return");
        icon.classList.toggle("hidden");
        e.target.classList.toggle("rounded-full");
        e.target.classList.toggle("pl-5");
        e.target.classList.toggle("w-72");
        image.classList.toggle("h-9");
        image.classList.toggle("pr-3");
        image.src = `img/${image.src.includes("logo") ? "return" : "logo_solid"}.svg`;
    };

    const submit = (/** @type {any} */ e) => {
        if (e.keyCode === "13") e.target.parentNode.parentNode.submit(); console.log("yup!");
    };
</script>

<div class="fixed top-0 h-16 w-screen m-0 z-10 justify-center items-center
    flex bg-amber-700 text-white shadow-xl drop-shadow-sm">
    <div class="flex justify-between items-center mb-1 w-full px-10">
        <div class="flex justify-start items-center flex-row gap-3">
            <a href="/" class="flex flex-row gap-1 justify-start items-center">
                <img src="img/logo_solid.svg" alt="squared" class="h-12 invert drop-shadow-lg return">
            </a>
            <form>
                <div class="flex flex-row">
                    <div class="flex items-center justify-center bg-white rounded-l-full px-3">
                        <img src="img/search.svg" alt="search" class="h-6 a700">
                    </div>
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
                    <img src="img/feed.svg" alt="feed" class="h-10 {page === 1 ? "" : "invert"}">
                    <span class="sidebar-tooltip group-hover/tt:scale-100 font-bold text-sm">
                        Feed
                    </span>
                </a>
                <a href="/" class="relative flex items-center 
                    justify-center h-24 w-[4.75rem] rounded-b-full {page === 2 ? "bg-white" : ""} 
                    group/tt">
                    <img src="img/cube.svg" alt="cube" class="h-10 {page === 2 ? "" : "invert"}">
                    <span class="sidebar-tooltip group-hover/tt:scale-100 font-bold text-sm">
                        Your Square
                    </span>
                </a>
                <a href="/notes" class="relative flex items-center {page === 3 ? "bg-white" : ""}
                    justify-center h-24 w-[4.75rem] rounded-b-fullhover:bg-white 
                    hover:drop-shadow-sm group/tt">
                    <img src="img/note.svg" alt="note" class="h-8 invert
                        a700 {page === 3 ? "" : "invert"}">
                    <span class="sidebar-tooltip group-hover/tt:scale-100 font-bold text-sm">
                        Notes
                    </span>
                </a>
            </div>
            <div class="flex justify-start items-center flex-row bg-white 
                rounded-full gap-3 px-5 py-1">
                <img src="img/example.jpg" class="h-9 rounded-full" alt="profile">
                <img src="img/menu.svg" class="h-6" alt="menu">
            </div>
        </div>
    </div>
</div>

