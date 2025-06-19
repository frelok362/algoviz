import type { AlgorithmGeneratorFunction, ListEntry } from '$lib/types';

export const quickSort: AlgorithmGeneratorFunction = function* (arr) {
	const copy = [...arr];

	function* partition(start: number, end: number): Generator<ListEntry[], number, unknown> {
		const pivot = copy[end - 1];
		pivot.state = 'pivot';

		let i = start;

		for (let j = start; j < end - 1; j++) {
			copy.forEach((e) => {
				if (e !== pivot) e.state = null;
			});

			copy[i].state = 'compare';
			copy[j].state = 'compare';
			yield [...copy];

			if (copy[j].value < pivot.value) {
				if (i !== j) {
					[copy[i], copy[j]] = [copy[j], copy[i]];
					copy[i].state = 'swap';
					copy[j].state = 'swap';
					yield [...copy];
				}
				i++;
			}
		}

		if (i !== end - 1) {
			[copy[i], copy[end - 1]] = [copy[end - 1], copy[i]];
			copy[i].state = 'swap';
			copy[end - 1].state = 'swap';
			yield [...copy];
		}

		return i;
	}

	function* sort(start: number, end: number): Generator<ListEntry[], void, unknown> {
		if (start >= end - 1) return;

		const pivotIndex = yield* partition(start, end);
		yield* sort(start, pivotIndex);
		yield* sort(pivotIndex + 1, end);
	}

	yield* sort(0, copy.length);
	return [...copy];
};
