<script>
    /**
	 * @type {any}
	 */
     export let text;
    /**
	 * @type {any}
	 */
     export let error;
    /**
   * @type {any}
   */
     export let id;
    $: removed = "";
    $: color = "";

    $: {
        if (error) color = "bg-red-500";
        else color = "bg-green-500";
    }

    function remove(){
        removed = "scale-0";
    }
</script>

<div class="relative flex bg-slate-100 w-60 h-16 drop-shadow-xl rounded-xl 
    text-sm {removed}" id={id}>
    <div class="absolute bg-slate-200 w-full h-7 rounded-t-xl
        flex items-center {color}">
        <button class="absolute right-0 p-2 group/x" on:click={remove}>
            <img class="h-3 group-hover/x:scale-110 invert" src="img/ex.svg" alt="x">
        </button>
    </div>
    <div class="absolute top-7 p-3 bg-slate-300 h-full w-full rounded-b-xl">
        {text}
    </div>
</div>
