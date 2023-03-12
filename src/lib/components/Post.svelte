<script lang="ts">
	import Interaction from '$lib/components/Interaction.svelte';
	import OptionsBox from '$lib/components/OptionsBox.svelte';
	import { time } from '$lib/helpers/time';
	import { defaultAv } from '$lib/helpers/image';

	export let data: any;
	export let id: string;

	const toggleOptions = () => document.getElementById('toggle' + id)?.classList.toggle('scale-0');
	const hide = () =>
		setTimeout(() => document.getElementById('toggle' + id)?.classList.add('scale-0'), 100);
</script>

<div
	class="flex flex-col w-full bg-white rounded-lg shadow-sm
    px-4 py-3 items-center gap-1 relative border-slate-200 border"
	id={data.id}
>
	<div class="flex flex-row w-full gap-4 justify-center">
		<div class="h-max w-1/12 flex flex-col">
			<a href="/{data.username}">
				<img
					src={data.author.img ?? defaultAv(`${data.author.name.first} ${data.author.name.last}`)}
					alt="sample"
					class="rounded-full w-12"
				/>
			</a>
		</div>
		<div class="w-10/12 flex flex-col">
			<div class="flex flex-row gap-1 full">
				<a href="/{data.username}" class="hover:underline">
					<h1 class="opacity-90 font-semibold">
						{data.author.name.first}
						{data.author.name.last}
					</h1>
				</a>
				<h1 class="opacity-60">
					@{data.author.username} ·
					{data.timestamp === Date.now() || data.timestamp + 30 === Date.now() || !data.timestamp
						? 'now'
						: time(Date.now() - data.timestamp)}
				</h1>
			</div>
			<h1 class="font-normal opacity-90 full break-words">
				{data.content}
			</h1>
			<div class="h-8 w-full flex flex-row items-center justify-between gap-5 mt-2">
				<Interaction
					data={[
						{ type: 'heart', number: data.interactions.likes },
						{ type: 'comment', number: data.interactions.comments },
						{ type: 'share', number: data.interactions.shares }
					]}
				/>
			</div>
		</div>
		<div class="h-max w-1/12 flex flex-col items-center">
			<button
				class="p-1 hover:bg-slate-100 rounded-full -mt-1"
				on:click={toggleOptions}
				on:blur={hide}
			>
				<img src="img/arrow.svg" alt="options" class=" h-7 opacity-50" />
			</button>
		</div>
		<div id="toggle{id}" class="scale-0">
			<OptionsBox options={[{ name: 'Remove' }, { name: 'Report' }]} />
		</div>
	</div>
</div>
