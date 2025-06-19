<script lang="ts">
	import type { AlgorithmPlayer } from '$lib/AlgorithmPlayer.svelte';
	import { RabbitIcon, SnailIcon, TurtleIcon } from '@lucide/svelte';

	let { player }: { player: AlgorithmPlayer } = $props();
</script>

<div class="join">
	<button
		class="btn btn-square join-item"
		onclick={() => (player.playSpeed = 'slow')}
		disabled={player.playSpeed === 'slow'}
	>
		<SnailIcon />
	</button>
	<button
		class="btn btn-square join-item"
		onclick={() => (player.playSpeed = 'normal')}
		disabled={player.playSpeed === 'normal'}
	>
		<TurtleIcon />
	</button>
	<button
		class="btn btn-square join-item"
		onclick={() => (player.playSpeed = 'fast')}
		disabled={player.playSpeed === 'fast'}
	>
		<RabbitIcon />
	</button>
</div>
