<script lang="ts">
    export let options: any;
    export let toggler: string;
</script>
<div class="absolute top-10 right-5 flex flex-col bg-slate-200 shadow-sm
    text-sm z-0 p-1 {toggler} scale-0 rounded-md border-slate-300 border">
    {#each options as option}
        <button class="w-full hover:bg-slate-300 p-1">
            {option}
        </button>
    {/each}
</div>