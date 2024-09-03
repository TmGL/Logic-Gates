import { validate, checkNull, tables, Binary, Gate } from './utils';

/**
 * Representation of logic gates which takes one or two inputs, performs a boolean operation on them and returns a boolean output
 */
export default class Gates {
	public a: Binary;
	public b?: Binary;

	/**
	 * Allows two values to be set and used multiple times.
	 * @param a - The first value
	 * @param b - The second value
	 */
	public constructor(a: Binary, b?: Binary) {
		validate(a, b);
		this.a = a
		if (typeof b !== 'undefined') this.b = b;
	}

	/**
	 * Returns false if input is 0, true otherwise.
	 */
	public get buffer(): boolean {
		return Gates.buffer(this.a);
	}

	/**
	 * Returns a negation on the input.
	 */
	public get NOT(): boolean {
		return Gates.NOT(this.a);
	}

	/**
	 * Returns true if both inputs are true.
	 */
	public get AND(): boolean {
		checkNull(this.b);
		return Gates.AND(this.a, this.b);
	}

	/**
	 * Returns true if either input is true.
	 */
	public get OR(): boolean {
		checkNull(this.b);
		return Gates.OR(this.a, this.b);
	}

	/**
	 * Returns false if both inputs are true.
	 */
	public get NAND(): boolean {
		checkNull(this.b);
		return Gates.NAND(this.a, this.b);
	}

	/**
	 * Returns true if either input is true.
	 */
	public get NOR(): boolean {
		checkNull(this.b);
		return Gates.NOR(this.a, this.b);
	}

	/**
	 * Returns true if both inputs are equal.
	 */
	public get XAND(): boolean {
		checkNull(this.b);
		return Gates.XAND(this.a, this.b);
	}

	/**
	 * Returns true if only one input is true.
	 */
	public get XOR(): boolean {
		checkNull(this.b);
		return Gates.XOR(this.a, this.b);
	}

	/**
	 * Returns false is both inputs are equal.
	 */
	public get XNAND(): boolean {
		checkNull(this.b);
		return Gates.XAND(this.a, this.b);
	}

	/**
	 * Returns false if only one input is true.
	 */
	public get XNOR(): boolean {
		checkNull(this.b);
		return Gates.XNOR(this.a, this.b);
	}

	/**
	 * Returns false if input is 0, true otherwise.
	 */
	public static buffer(a: Binary): boolean {
		validate(a);
		return Boolean(a);
	}

	/**
	 * Returns a negation on the input.
	 */
	public static NOT(a: Binary): boolean {
		validate(a);
		return !Boolean(a);
	}

	/**
	 * Returns true if both inputs are true.
	 */
	public static AND(a: Binary, b: Binary): boolean {
		validate(a, b);
		return Boolean(a && b);
	}

	/**
	 * Returns true if either input is true.
	 */
	public static OR(a: Binary, b: Binary): boolean {
		validate(a, b);
		return Boolean(a || b);
	}

	/**
	 * Returns false if both inputs are true.
	 */
	public static NAND(a: Binary, b: Binary): boolean {
		validate(a, b);
		return !(this.AND(a, b));
	}

	/**
	 * Returns true if either input is true.
	 */
	public static NOR(a: Binary, b: Binary): boolean {
		validate(a, b);
		return !(this.OR(a, b));
	}

	/**
	 * Returns true if both inputs are equal.
	 */
	public static XAND(a: Binary, b: Binary): boolean {
		validate(a, b);
		return a === b;
	}

	/**
	 * Returns true if only one input is true.
	 */
	public static XOR(a: Binary, b: Binary): boolean {
		validate(a, b);
		return a !== b;
	}

	/**
	 * Returns false is both inputs are equal.
	 */
	public static XNAND(a: Binary, b: Binary): boolean {
		validate(a, b);
		return !(this.XAND(a, b));
	}

	/**
	 * Returns false if only one input is true.
	 */
	public static XNOR(a: Binary, b: Binary): boolean {
		validate(a, b);
		return !(this.XOR(a, b));
	}

	/**
	 * Prints the truth table of a certain logic this.
	 */
	public static truthTable(gate: Gate): void {
		return console.table(tables[gate?.toLowerCase() as Gate]);
	}
}
