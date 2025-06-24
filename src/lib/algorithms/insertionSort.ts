import type { AlgorithmGeneratorFunction } from '$lib/types';

export const insertionSort: AlgorithmGeneratorFunction = function* (arr) {
	const copy = [...arr];
	const n = copy.length;

	for (let i = 1; i < n; i++) {
		let j = i;

		while (j > 0 && copy[j - 1].value > copy[j].value) {
			copy.forEach((e) => (e.state = 'unsorted'));
			copy[j].state = 'compare';
			copy[j - 1].state = 'compare';
			yield [...copy];

			[copy[j], copy[j - 1]] = [copy[j - 1], copy[j]];
			copy[j].state = 'swap';
			copy[j - 1].state = 'swap';
			yield [...copy];

			j--;
		}
	}

	return [...copy];
};
