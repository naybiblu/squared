<script>
    //$: icon = localStorage.getItem("theme") === "dark" ? "light" : "dark";

    /**
	 * @type {boolean}
	 */
     export let adminMode;
     /**
	 * @type {{ user: { username: any; }; }}
	 */
      export let data;
    let icons = [
        { name: "Idiot Board", src: "img/feed.svg", path: "/" },
        { name: "Search", src: "img/search.svg" },
        { name: "Settings", src: "img/settings.svg", path: "/settings" },
    ];

    /*function darkMode() {
        let theme = localStorage.getItem("theme");
        if (theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            icon = "dark";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            icon = "light";
        }
    }*/
</script>

<style>
    .group:hover > img {
        filter: invert(68%) sepia(99%) saturate(6806%) hue-rotate(24deg) brightness(92%) contrast(93%);
    }

    hr {
        opacity: 50%;
    }
</style>

<div class="fixed top-0 left-0 h-screen w-16 m-0 z-10
    flex flex-col bg-amber-700 text-white shadow-xl drop-shadow-md">
    <a href="/{data.user.username}" class=" invert relative flex items-center 
		justify-center h-12 w-12 my-5 mx-auto">
        <img class="h-10" src="img/logo_solid.svg" alt="squared">
    </a>
    <hr class="mx-auto w-10 h-1 bg-gray-100 dark:bg-white rounded 
        border-0">
    <div class="my-3">
        {#each icons as icon}
          {#if !icon.path}
            <button class="sidebar-icon group invert hover:invert-0">
              <img class="h-9" src={icon.src} alt={icon.name.toLowerCase()}>
              <span class="sidebar-tooltip group-hover:scale-100 font-bold text-sm">{icon.name}</span>
            </button>
          {:else}
            <a href={icon.path} class="sidebar-icon group invert hover:invert-0">
              <img class="h-9" src={icon.src} alt={icon.name.toLowerCase()}>
              <span class="sidebar-tooltip group-hover:scale-100 font-bold text-sm">{icon.name}</span>
            </a>
          {/if}
        {/each}
        {#if adminMode}
            <a href="/dev" class="sidebar-icon group invert hover:invert-0">
                <img class="h-8" src="img/dev.svg" alt="dev">
                <span class="sidebar-tooltip group-hover:scale-100 font-bold text-sm">Dev's Board</span>
            </a>
        {/if}
    </div>
    <form class="my-5 absolute inset-x-0 bottom-0" method="POST" action="?/logout">
        <button type="submit" class="sidebar-icon group invert hover:invert-0">
            <img class="h-8" src="img/ex.svg" alt="">
            <span class="sidebar-tooltip group-hover:scale-100 font-bold text-sm">Logout</span>
        </button>
    </form>
    <!-- svelte-ignore a11y-click-events-have-key-events 
    <div class="my-5 absolute inset-x-0 bottom-0 sidebar-icon group invert 
        hover:invert-0" on:click={darkMode}>
        <img class="h-8" src="/{icon}.svg" alt="squared">
    </div>-->
</div>

