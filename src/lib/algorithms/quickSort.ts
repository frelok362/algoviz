import type { AlgorithmGeneratorFunction, ListEntry } from '$lib/types';

export const quickSort: AlgorithmGeneratorFunction = function* (arr) {
	const copy = [...arr];

	function* partition(start: number, end: number): Generator<ListEntry[], number, unknown> {
		let i = start;
		const pivot = copy[end - 1];

		for (let j = start; j < end - 1; j++) {
			for (let k = start; k < end; k++) {
				if (copy[k].state !== 'active') copy[k].state = null;
			}
			pivot.state = 'pivot';
			copy[j].state = 'compare';
			copy[i].state = 'compare';
			yield [...copy];

			if (copy[j].value < pivot.value) {
				if (i !== j) {
					[copy[i], copy[j]] = [copy[j], copy[i]];
					copy[i].state = 'swap';
					copy[j].state = 'swap';
					yield [...copy];
					copy[i].state = null;
					copy[j].state = null;
				}
				i++;
			}
		}

		if (i !== end - 1) {
			for (let k = start; k < end; k++) {
				if (copy[k].state !== 'active') copy[k].state = null;
			}
			copy[i].state = 'compare';
			yield [...copy];

			[copy[i], copy[end - 1]] = [copy[end - 1], copy[i]];
			copy[i].state = 'swap';
			copy[end - 1].state = 'swap';
			yield [...copy];
			copy[i].state = null;
			copy[end - 1].state = null;
		}

		for (let k = start; k < end; k++) {
			if (copy[k].state !== 'active') copy[k].state = null;
		}
		copy[i].state = 'pivotFinal';
		yield [...copy];
		copy[i].state = null;

		return i;
	}

	function* sort(start: number, end: number): Generator<ListEntry[], void, unknown> {
		if (start >= end - 1) return;

		for (let k = start; k < end; k++) {
			copy[k].state = 'active';
		}
		yield [...copy];

		const pivotIndex = yield* partition(start, end);
		yield* sort(start, pivotIndex);
		yield* sort(pivotIndex + 1, end);
	}

	yield* sort(0, copy.length);
	return [...copy];
};
