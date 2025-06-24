<script lang="ts">
	import { LIST_ENTRY_STATE_COLOR } from '$lib/const';
	import type { ListEntry } from '$lib/types';
	import { flip } from 'svelte/animate';
	import { quadOut } from 'svelte/easing';

	let { items = $bindable() }: { items: ListEntry[] } = $props();
</script>

<div class="bg-base-200 border-base-300 flex flex-row items-end gap-1 rounded-xl border p-4">
	{#each items as item (item.id)}
		<div
			class={`border-base-300 bg w-6 rounded-sm border ${LIST_ENTRY_STATE_COLOR[item.state!]}`}
			{@attach (el) => {
				el.style.height = 8 + item.value * 8 + 'px';
			}}
			animate:flip={{ duration: 100, easing: quadOut }}
		></div>
	{/each}
</div>
