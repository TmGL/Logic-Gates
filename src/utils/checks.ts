/**
 * Checks if the provided inputs are valid.
 * @param a - The first inputs
 * @param b - The second inputs, if it exists
 */
export function validate(a: any, b?: any): void {
	const msg = 'Invalid inputs provided';
	if (![0, 1].includes(a)) throw new Error(msg);
	if (b && ![0, 1].includes(b)) throw new Error(msg);
};

/**
 * Checks if the second input is null or not.
 * @param b - The second input, if it exists
 */
export function checkNull(b: any): void {
	if (b === null) throw new Error('Two inputs required for this operation');
}