export type ListEntry = {
	id: string;
	value: number;
	state:
		| 'unsorted'
		| 'sorted'
		| 'compare'
		| 'swap'
		| 'current'
		| 'min'
		| 'pivot'
		| 'pivotFinal'
		| 'active';
};

export type AlgorithmGenerator = Generator<ListEntry[], ListEntry[], unknown>;
export type AlgorithmGeneratorFunction = (
	arr: ListEntry[]
) => Generator<ListEntry[], ListEntry[], unknown>;
