import { bubbleSort } from './algorithms/bubbleSort';
import { insertionSort } from './algorithms/insertionSort';
import { quickSort } from './algorithms/quickSort';
import { selectionSort } from './algorithms/selectionSort';
import type { ListEntry } from './types';

export const ALGORITHMS = {
	bubbleSort,
	selectionSort,
	insertionSort,
	quickSort
} as const;

export const ALGORITHM_LEGEND_STATES = {
	bubbleSort: ['compare', 'swap'],
	selectionSort: ['current', 'compare', 'min', 'swap'],
	insertionSort: ['compare', 'swap'],
	quickSort: ['pivot', 'compare', 'swap']
} as const satisfies Record<keyof typeof ALGORITHMS, Exclude<ListEntry['state'], null>[]>;

export const LIST_ENTRY_STATE_COLOR = {
	compare: 'bg-blue-500',
	swap: 'bg-green-600',
	current: 'bg-yellow-400',
	min: 'bg-cyan-500',
	pivot: 'bg-purple-400'
} as const satisfies Record<Exclude<ListEntry['state'], null>, string>;
