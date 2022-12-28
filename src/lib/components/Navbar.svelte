<script>

    import Logo from "$lib/components/Logo.svelte";

    /**
	 * @type {boolean}
	 */
     //export let adminMode;
     /**
	 * @type {{ user: { username: any; }; }}
	 */
     // export let data;
</script>

<style>
    .orange {
        filter: invert(68%) sepia(99%) saturate(6806%) hue-rotate(24deg) brightness(92%) contrast(93%);
    }
</style>

<div class="fixed top-0 h-16 w-screen m-0 z-10 justify-center items-center
    flex bg-amber-700 text-white shadow-xl drop-shadow-sm">
    <div class="flex justify-between items-center mb-1 w-full px-10">
        <div class="flex justify-start items-center flex-row">
            <a href="/" class="flex flex-row gap-1 justify-start items-center">
                <img src="img/logo_solid.svg" alt="squared" class="h-12 invert drop-shadow-lg">
            </a>
        </div>
        <div class="flex justify-center items-center">
            <a href="/notes" class="relative flex items-center 
            justify-center h-24 w-[4.75rem] rounded-full peer/out hover:bg-white">
                <img src="img/note.svg" alt="note">
            </a>
            <a href="/" class="relative flex items-center 
                justify-center h-24 w-[4.75rem] rounded-full bg-white peer-hover/out:bg-transparent">
                <span class="mt-4">
                    <Logo/>
                </span>
            </a>
        </div>
        <div class="flex justify-start items-center flex-row bg-white rounded-full gap-2 px-5">
            <a href="/" class="flex flex-row gap-1 justify-start items-center">
                <img src="img/logo_solid.svg" alt="squared" class="h-12 invert drop-shadow-lg orange">
            </a>
            <a href="/" class="flex flex-row gap-1 justify-start items-center">
                <img src="img/logo_solid.svg" alt="squared" class="h-12 invert drop-shadow-lg orange">
            </a>
            <a href="/" class="flex flex-row gap-1 justify-start items-center">
                <img src="img/logo_solid.svg" alt="squared" class="h-12 invert drop-shadow-lg orange">
            </a>
        </div>
    </div>
</div>

