export type ListEntry = {
	id: string;
	value: number;
	state: null | 'compare' | 'swap' | 'current' | 'min' | 'pivot';
};

export type AlgorithmGenerator = Generator<ListEntry[], ListEntry[], unknown>;
export type AlgorithmGeneratorFunction = (
	arr: ListEntry[]
) => Generator<ListEntry[], ListEntry[], unknown>;
