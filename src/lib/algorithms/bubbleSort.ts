import type { AlgorithmGeneratorFunction } from '$lib/types';

export const bubbleSort: AlgorithmGeneratorFunction = function* (arr) {
	const n = arr.length;
	const copy = [...arr]; // avoid mutating input

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - 1 - i; j++) {
			copy.forEach((i) => (i.state = null));
			copy[j].state = 'compare';
			copy[j + 1].state = 'compare';
			yield [...copy];
			if (copy[j].value > copy[j + 1].value) {
				[copy[j], copy[j + 1]] = [copy[j + 1], copy[j]];
				copy[j].state = 'swap';
				copy[j + 1].state = 'swap';
				yield [...copy];
			}
		}
	}

	return [...copy];
};
