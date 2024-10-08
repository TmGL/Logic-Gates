import { Gate, Binary } from './types';

interface Table {
	A: Binary;
	Y: Binary;
	B?: Binary
}

export const tables: Record<Gate, Table[]> = {
	'buffer': [
		{ A: 0, Y: 0 },
		{ A: 1, Y: 1 }
	],
	'not': [
		{ A: 0, Y: 1 },
		{ A: 1, Y: 0 }
	],
	'and': [
		{ A: 0, B: 0, Y: 0 },
		{ A: 1, B: 0, Y: 0 },
		{ A: 0, B: 1, Y: 0 },
		{ A: 1, B: 1, Y: 1 }
	],
	'or': [
		{ A: 0, B: 0, Y: 0 },
		{ A: 1, B: 0, Y: 1 },
		{ A: 0, B: 1, Y: 1 },
		{ A: 1, B: 1, Y: 1 }
	],
	'nand': [
		{ A: 0, B: 0, Y: 1 },
		{ A: 1, B: 0, Y: 1 },
		{ A: 0, B: 1, Y: 1 },
		{ A: 1, B: 1, Y: 0 }
	],
	'nor': [
		{ A: 0, B: 0, Y: 1 },
		{ A: 1, B: 0, Y: 0 },
		{ A: 0, B: 1, Y: 0 },
		{ A: 1, B: 1, Y: 0 }
	],
	'xand': [
		{ A: 0, B: 0, Y: 1 },
		{ A: 1, B: 0, Y: 0 },
		{ A: 0, B: 1, Y: 0 },
		{ A: 1, B: 1, Y: 1 }
	],
	'xor': [
		{ A: 0, B: 0, Y: 0 },
		{ A: 1, B: 0, Y: 1 },
		{ A: 0, B: 1, Y: 1 },
		{ A: 1, B: 1, Y: 0 }
	],
	'xnand': [
		{ A: 0, B: 0, Y: 0 },
		{ A: 1, B: 0, Y: 1 },
		{ A: 0, B: 1, Y: 1 },
		{ A: 1, B: 1, Y: 0 }
	],
	'xnor': [
		{ A: 0, B: 0, Y: 1 },
		{ A: 1, B: 0, Y: 0 },
		{ A: 0, B: 1, Y: 0 },
		{ A: 1, B: 1, Y: 1 }
	]
};