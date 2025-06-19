<script lang="ts">
	import type { AlgorithmPlayer } from '$lib/AlgorithmPlayer.svelte';
	import { ALGORITHMS } from '$lib/const';
	import { titleCase } from 'scule';

	let { player }: { player: AlgorithmPlayer } = $props();
</script>

<select class="select" bind:value={player.generatorFn} disabled={player.hasStarted}>
	{#each Object.entries(ALGORITHMS) as [name, fn] (name)}
		<option value={fn}>{titleCase(name)}</option>
	{/each}
</select>
