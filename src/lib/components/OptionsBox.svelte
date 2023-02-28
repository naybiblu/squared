<script lang="ts">
    export let options: any;
</script>
<div class="absolute top-12 right-10 flex flex-col bg-slate-200 shadow-sm
    text-sm z-20 py-2 rounded-md border-slate-300 border font-bold">
    <ul class="flex flex-col items-start justify-center">
        {#each options as option}
            <a href={option.link ?? "/"} class="hover:bg-white px-3 py-1 w-full">
                <li>
                    {option.name}
                </li>
            </a>   
        {/each}
    </ul>
</div>