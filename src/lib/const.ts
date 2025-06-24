import { bubbleSort } from './algorithms/bubbleSort';
import { insertionSort } from './algorithms/insertionSort';
import { quickSort } from './algorithms/quickSort';
import { selectionSort } from './algorithms/selectionSort';
import type { ListEntry } from './types';

export const ALGORITHM = {
	bubbleSort,
	selectionSort,
	insertionSort,
	quickSort
} as const;

export const ALGORITHM_LEGEND_STATES = {
	bubbleSort: ['unsorted', 'sorted', 'compare', 'swap'],
	selectionSort: ['compare', 'swap', 'current', 'min'],
	insertionSort: ['compare', 'swap'],
	quickSort: ['compare', 'swap', 'pivot', 'pivotFinal', 'active']
} as const satisfies Record<keyof typeof ALGORITHM, Exclude<ListEntry['state'], null>[]>;

export const LIST_ENTRY_STATE_COLOR = {
	unsorted: 'bg-amber-500',
	sorted: 'bg-amber-600',
	compare: 'bg-blue-500',
	swap: 'bg-green-600',
	current: 'bg-yellow-400',
	min: 'bg-cyan-500',
	pivot: 'bg-purple-400',
	pivotFinal: 'bg-purple-600',
	active: 'bg-amber-600'
} as const satisfies Record<Exclude<ListEntry['state'], null>, string>;

export const ALGORITHM_INFO = {
	bubbleSort: {
		tags: ['iterative'],
		steps: [
			'Loop through the list multiple times.',
			'On each pass, compare adjacent items and swap if needed.',
			'Largest unsorted item moves to the end each pass.',
			'Stop when a pass has no swaps.'
		],
		keyIdea: 'Repeatedly push the largest unsorted item to the end by swapping adjacent pairs.'
	},
	selectionSort: {
		tags: ['iterative'],
		steps: [
			'Loop through the list from start to end.',
			'On each iteration, find the smallest item in the unsorted portion.',
			'Swap it with the first unsorted item.',
			'Shrink the unsorted portion by one each time.'
		],
		keyIdea: 'Repeatedly find the smallest unsorted item and move it to its correct position.'
	},
	insertionSort: {
		tags: ['iterative'],
		steps: [
			'Loop from the second item to the end.',
			'For each item, shift larger sorted items right.',
			'Insert the current item into its correct position.',
			'Repeat until the whole list is sorted.'
		],
		keyIdea:
			'Build the sorted part one item at a time by inserting each new item in the right place.'
	},
	quickSort: {
		tags: ['recursive'],
		steps: [
			'Pick a pivot (usually the last item in the current sublist).',
			'Go through the sublist from start to one before the pivot.',
			'If an item is smaller than the pivot, move it toward the front.',
			'Finally, place the pivot between the smaller and larger items. This is its final position.',
			'Recursively apply the same process to the left and right parts.',
			'Stops when a sublist has 0 or 1 items (already sorted).'
		],
		keyIdea: 'Divide the list around a pivot and sort each part separately (divide and conquer).'
	}
} as const satisfies Record<
	keyof typeof ALGORITHM,
	{ tags: string[]; steps: string[]; keyIdea: string }
>;
