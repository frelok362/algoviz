<script lang="ts">
	import AlgorithmSelector from '$lib/components/AlgorithmSelector.svelte';
	import Legend from '$lib/components/Legend.svelte';
	import List from '$lib/components/List.svelte';
	import PlayerControls from '$lib/components/PlayerControls.svelte';
	import SpeedSelector from '$lib/components/SpeedSelector.svelte';
	import { DicesIcon } from '@lucide/svelte';
	import { AlgorithmPlayer } from '../lib/AlgorithmPlayer.svelte';

	const player = new AlgorithmPlayer();
</script>

<div class="m-8 flex flex-col items-center justify-center gap-2">
	<div>
		<div
			class="bg-base-200 border-base-300 mb-3 flex flex-row justify-between gap-2 rounded-xl border p-4"
		>
			<AlgorithmSelector {player} />
			<Legend {player} />
		</div>
		<List bind:items={player.items} />
		<div class="bg-base-200 border-base-300 mt-3 grid grid-cols-3 rounded-xl border p-4">
			<SpeedSelector {player} />
			<PlayerControls {player} />
			<div class="flex flex-row justify-end gap-2">
				<button class="btn btn-square" onclick={player.shuffle} disabled={player.hasStarted}>
					<DicesIcon />
				</button>
			</div>
		</div>
	</div>
</div>
