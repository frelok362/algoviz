<script lang="ts">
	import { bubbleSort } from '$lib/algorithms/bubbleSort';
	import { insertionSort } from '$lib/algorithms/insertionSort';
	import { selectionSort } from '$lib/algorithms/selectionSort';
	import List from '$lib/components/List.svelte';
	import { LIST_ENTRY_STATE_COLOR } from '$lib/const';
	import {
		DicesIcon,
		PauseIcon,
		PlayIcon,
		RabbitIcon,
		RotateCcwIcon,
		SnailIcon,
		SquareIcon,
		StepForwardIcon,
		TurtleIcon
	} from '@lucide/svelte';
	import { titleCase } from 'scule';
	import { AlgorithmPlayer } from './AlgorithmPlayer.svelte';

	const algorithms = {
		bubbleSort,
		selectionSort,
		insertionSort
	};

	const player = new AlgorithmPlayer();
</script>

<div class="m-8 flex flex-col items-center justify-center gap-2">
	<div>
		<div
			class="bg-base-200 border-base-300 mb-3 flex flex-row justify-between gap-2 rounded-xl border p-4"
		>
			{@render algorithmSelect()}
			{@render legend()}
		</div>
		<List bind:items={player.items} />
		<div class="bg-base-200 border-base-300 mt-3 grid grid-cols-3 rounded-xl border p-4">
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

			<div class="flex flex-row justify-center gap-2">
				<button
					class="btn btn-square btn-primary"
					onclick={player.reset}
					disabled={!player.hasStarted}
				>
					{#if !player.isDone}
						<SquareIcon />
					{:else}
						<RotateCcwIcon />
					{/if}
				</button>
				{#if !player.isPlaying}
					<button class="btn btn-square btn-primary" onclick={player.play}>
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
					disabled={player.isPlaying}
				>
					<StepForwardIcon />
				</button>
			</div>

			<div class="flex flex-row justify-end gap-2">
				<button class="btn btn-square" onclick={player.shuffle} disabled={player.hasStarted}>
					<DicesIcon />
				</button>
			</div>
		</div>
	</div>
</div>

{#snippet legend()}
	<div class="flex flex-row gap-4">
		{#each Object.entries(LIST_ENTRY_STATE_COLOR) as [key, cls] (key)}
			<div class="flex flex-row items-center gap-1">
				<div class={`h-4 w-4 rounded-md ${cls}`}></div>
				<div>{titleCase(key)}</div>
			</div>
		{/each}
	</div>
{/snippet}

{#snippet algorithmSelect()}
	<select class="select" bind:value={player.generatorFn}>
		{#each Object.entries(algorithms) as [name, fn] (name)}
			<option value={fn}>{titleCase(name)}</option>
		{/each}
	</select>
{/snippet}
