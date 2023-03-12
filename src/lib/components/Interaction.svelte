<script lang="ts">
	export let data: any;
</script>

{#each data as datum}
	<button
		class="flex justify-center items-center gap-2 rounded-full
    hover:bg-slate-100 py-2 px-4 group/h"
	>
		<img
			src="img/{datum.type}.svg"
			alt={datum.type === 'heart' ? 'like' : datum.type}
			class="h-5 opacity-60 group-hover/h:opacity-100"
		/>
		<p class="opacity-50 text-base group-hover/h:opacity-100">{datum.number}</p>
	</button>
{/each}
