<script lang="ts">
	import { PauseIcon, PlayIcon, RotateCcwIcon, SquareIcon, StepForwardIcon } from '@lucide/svelte';
	import type { AlgorithmPlayer } from '../AlgorithmPlayer.svelte';

	let { player }: { player: AlgorithmPlayer } = $props();
</script>

<div class="flex flex-row justify-center gap-2">
	<button class="btn btn-square btn-primary" onclick={player.reset} disabled={!player.hasStarted}>
		{#if !player.isDone}
			<SquareIcon />
		{:else}
			<RotateCcwIcon />
		{/if}
	</button>
	{#if !player.isPlaying}
		<button class="btn btn-square btn-primary" onclick={player.play} disabled={player.isDone}>
			<PlayIcon />
		</button>
	{:else}
		<button class="btn btn-square btn-primary" onclick={player.pause}>
			<PauseIcon />
		</button>
	{/if}
	<button
		class="btn btn-square btn-primary"
		onclick={player.next}
		disabled={player.isPlaying || player.isDone}
	>
		<StepForwardIcon />
	</button>
</div>
