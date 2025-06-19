import type { AlgorithmGenerator, ListEntry } from '$lib/types';
import { nanoid } from 'nanoid';
import { ALGORITHM } from './const';

const ITEM_COUNT = 32;
const STEP_DURATION_MS = {
	fast: 50,
	normal: 200,
	slow: 400
};

export class AlgorithmPlayer {
	items = $state<Array<ListEntry>>(
		new Array(ITEM_COUNT).fill(null).map((_, i) => ({ id: nanoid(), value: i, state: null }))
	);

	generatorFn = $state<keyof typeof ALGORITHM>('bubbleSort');
	generator = $state<AlgorithmGenerator>();
	steps = $state<Array<IteratorResult<ListEntry[], ListEntry[]>>>([]);

	#interval = $state<ReturnType<typeof setInterval>>();

	playSpeed = $state<keyof typeof STEP_DURATION_MS>('normal');

	hasStarted = $derived(this.steps.length > 0);
	isPlaying = $derived(!!this.#interval);
	isDone = $derived(this.steps[this.steps.length - 1]?.done);

	constructor() {
		this.reset();
	}

	shuffle = () => {
		this.items.sort(() => Math.random() - 0.5);
	};

	reset = () => {
		this.pause();
		this.generator = undefined;
		this.steps = [];
		this.shuffle();
		this.items.forEach((i) => (i.state = null));
	};

	next = () => {
		if (!this.generator) {
			this.generator = ALGORITHM[this.generatorFn](this.items);
		}
		this.steps.push(this.generator.next());
		this.items = this.steps[this.steps.length - 1].value;
	};

	play = () => {
		const handler = () => {
			if (this.isDone) {
				this.items.forEach((i) => (i.state = null));
				this.pause();
				return;
			}
			this.next();
			this.#interval = setTimeout(handler, STEP_DURATION_MS[this.playSpeed]);
		};
		this.#interval = setTimeout(handler, STEP_DURATION_MS[this.playSpeed]);
	};

	pause = () => {
		clearTimeout(this.#interval);
		this.#interval = undefined;
	};
}
