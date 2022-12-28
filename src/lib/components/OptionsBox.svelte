<script>
    /**
	 * @type {any}
	 */
     export let options;
     /**
	 * @type {any}
	 */
      export let toggler;
</script>
<div class="h-0 w-0 border-l-transparent border-r-transparent border-b-white
        border-8 border-t-transparent top-6 right-3 absolute z-10 
        {toggler} scale-0"></div>
<div class="absolute top-10 right-3 flex flex-col bg-white drop-shadow-lg
    text-sm z-0 p-1 {toggler} scale-0 rounded-md">
    {#each options as option}
        <button class="w-full hover:bg-slate-100 p-1">
            {option}
        </button>
    {/each}
</div>