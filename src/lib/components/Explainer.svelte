<script lang="ts">
	import type { AlgorithmPlayer } from '$lib/AlgorithmPlayer.svelte';
	import { ALGORITHM_INFO } from '$lib/const';
	import { DotIcon, LightbulbIcon } from '@lucide/svelte';
	import { titleCase } from 'scule';

	let { player }: { player: AlgorithmPlayer } = $props();

	let info = $derived(ALGORITHM_INFO[player.generatorFn]);
</script>

<div class="flex flex-col gap-2">
	<div class="mb-2 flex flex-row items-center justify-between">
		<h1 class="text-3xl font-semibold">{titleCase(player.generatorFn)}</h1>
		{#each info.tags as tag (tag)}
			<div class="badge badge-accent badge-lg">{titleCase(tag)}</div>
		{/each}
	</div>
	{#each info.steps as str, i (i)}
		<div class="flex flex-row">
			<DotIcon />
			<span class="text-lg">{str}</span>
		</div>
	{/each}
	<div class="mt-4 flex flex-row items-center gap-2">
		<LightbulbIcon />
		<span class="text-xl italic">{info.keyIdea}</span>
	</div>
</div>
