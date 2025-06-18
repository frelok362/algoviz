import type { ListEntry } from './types';

export const LIST_ENTRY_STATE_COLOR = {
	compare: 'bg-blue-500',
	swap: 'bg-green-600',
	current: 'bg-yellow-400',
	min: 'bg-cyan-500'
} as const satisfies Record<Exclude<ListEntry['state'], null>, string>;
