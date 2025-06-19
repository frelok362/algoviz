<script lang="ts">
	import type { AlgorithmPlayer } from '$lib/AlgorithmPlayer.svelte';
	import { ALGORITHM_LEGEND_STATES, LIST_ENTRY_STATE_COLOR } from '$lib/const';
	import { titleCase } from 'scule';

	let { player }: { player: AlgorithmPlayer } = $props();
</script>

<div class="flex flex-row gap-4">
	{#each ALGORITHM_LEGEND_STATES[player.generatorFn] as state (state)}
		<div class="flex flex-row items-center gap-1">
			<div class={`h-4 w-4 rounded-md ${LIST_ENTRY_STATE_COLOR[state]}`}></div>
			<div>{titleCase(state)}</div>
		</div>
	{/each}
</div>
