import Gates from '../src';

// uhhh sure I guess
describe('logic gates', () => {
    test('buffer', () => {
        expect(Gates.buffer(1)).toBeTruthy();
        expect(Gates.buffer(0)).toBeFalsy();
    });

    test('AND', () => {
        expect(Gates.AND(0, 0)).toBeFalsy();
        expect(Gates.AND(1, 0)).toBeFalsy();
        expect(Gates.AND(0, 1)).toBeFalsy();
        expect(Gates.AND(1, 1)).toBeTruthy();
    });

    test('OR', () => {
        expect(Gates.OR(0, 0)).toBeFalsy();
        expect(Gates.OR(1, 0)).toBeTruthy();
        expect(Gates.OR(0, 1)).toBeTruthy();
        expect(Gates.OR(1, 1)).toBeTruthy();
    });

    test('NAND', () => {
        expect(Gates.NAND(0, 0)).toBeTruthy();
        expect(Gates.NAND(1, 0)).toBeTruthy();
        expect(Gates.NAND(0, 1)).toBeTruthy();
        expect(Gates.NAND(1, 1)).toBeFalsy();

        expect(Gates.NAND(0, 0)).not.toStrictEqual(Gates.AND(0, 0));
        expect(Gates.NAND(1, 0)).not.toStrictEqual(Gates.AND(1, 0));
        expect(Gates.NAND(0, 1)).not.toStrictEqual(Gates.AND(0, 1));
        expect(Gates.NAND(1, 1)).not.toStrictEqual(Gates.AND(1, 1));
    });

    test('NOR', () => {
        expect(Gates.NOR(0, 0)).toBeTruthy();
        expect(Gates.NOR(1, 0)).toBeFalsy();
        expect(Gates.NOR(0, 1)).toBeFalsy();
        expect(Gates.NOR(1, 1)).toBeFalsy();

        expect(Gates.NOR(0, 0)).not.toStrictEqual(Gates.OR(0, 0));
        expect(Gates.NOR(1, 0)).not.toStrictEqual(Gates.OR(1, 0));
        expect(Gates.NOR(0, 1)).not.toStrictEqual(Gates.OR(0, 1));
        expect(Gates.NOR(1, 1)).not.toStrictEqual(Gates.OR(1, 1));
    });

    test('XAND', () => {
        expect(Gates.XAND(0, 0)).toBeTruthy();
        expect(Gates.XAND(1, 0)).toBeFalsy();
        expect(Gates.XAND(0, 1)).toBeFalsy();
        expect(Gates.XAND(1, 1)).toBeTruthy();
    });

    test('XOR', () => {
        expect(Gates.XOR(0, 0)).toBeFalsy();
        expect(Gates.XOR(1, 0)).toBeTruthy();
        expect(Gates.XOR(0, 1)).toBeTruthy();
        expect(Gates.XOR(1, 1)).toBeFalsy();
    });

    test('XNAND', () => {
        expect(Gates.XNAND(0, 0)).toBeFalsy();
        expect(Gates.XNAND(1, 0)).toBeTruthy();
        expect(Gates.XNAND(0, 1)).toBeTruthy();
        expect(Gates.XNAND(1, 1)).toBeFalsy();

        expect(Gates.XNAND(0, 0)).not.toStrictEqual(Gates.XAND(0, 0));
        expect(Gates.XNAND(1, 0)).not.toStrictEqual(Gates.XAND(1, 0));
        expect(Gates.XNAND(0, 1)).not.toStrictEqual(Gates.XAND(0, 1));
        expect(Gates.XNAND(1, 1)).not.toStrictEqual(Gates.XAND(1, 1));
    });

    test('XNOR', () => {
        expect(Gates.XNOR(0, 0)).toBeTruthy();
        expect(Gates.XNOR(1, 0)).toBeFalsy();
        expect(Gates.XNOR(0, 1)).toBeFalsy();
        expect(Gates.XNOR(1, 1)).toBeTruthy();

        expect(Gates.XNOR(0, 0)).not.toStrictEqual(Gates.XOR(0, 0));
        expect(Gates.XNOR(1, 0)).not.toStrictEqual(Gates.XOR(1, 0));
        expect(Gates.XNOR(0, 1)).not.toStrictEqual(Gates.XOR(0, 1));
        expect(Gates.XNOR(1, 1)).not.toStrictEqual(Gates.XOR(1, 1));
    });
});