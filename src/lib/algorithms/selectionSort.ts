import type { AlgorithmGeneratorFunction } from '$lib/types';

export const selectionSort: AlgorithmGeneratorFunction = function* (arr) {
	const n = arr.length;
	const copy = [...arr];

	for (let i = 0; i < n - 1; i++) {
		let minIdx = i;

		for (let j = i + 1; j < n; j++) {
			copy.forEach((e) => (e.state = null));
			copy[i].state = 'current';
			copy[j].state = 'compare';
			copy[minIdx].state = 'min';
			yield [...copy];

			if (copy[j].value < copy[minIdx].value) {
				minIdx = j;
			}
		}

		if (minIdx !== i) {
			[copy[i], copy[minIdx]] = [copy[minIdx], copy[i]];
			copy[i].state = 'swap';
			copy[minIdx].state = 'swap';
			yield [...copy];
		}
	}

	return [...copy];
};
