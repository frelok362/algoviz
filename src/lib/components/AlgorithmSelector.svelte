<script lang="ts">
	import type { AlgorithmPlayer } from '$lib/AlgorithmPlayer.svelte';
	import { ALGORITHM } from '$lib/const';
	import { titleCase } from 'scule';

	let { player }: { player: AlgorithmPlayer } = $props();
</script>

<select class="select" bind:value={player.generatorFn} disabled={player.hasStarted}>
	{#each Object.keys(ALGORITHM) as name (name)}
		<option value={name}>{titleCase(name)}</option>
	{/each}
</select>
