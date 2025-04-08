import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
  it('works with an empty array', () => {
    const result = evenNumbers([]);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('formats whole numbers with ¥ symbol and .00 suffix', () => {
    expect(toDollars(10)).toBe('¥10.00');
    expect(toDollars(0)).toBe('¥0.00');
    expect(toDollars(3)).toBe('¥3.00');
  });

  it('preserves existing decimal places with ¥ symbol', () => {
    expect(toDollars(10.9939)).toBe('¥10.99');
    expect(toDollars(0.5)).toBe('¥0.50');
    expect(toDollars(123.456)).toBe('¥123.46'); // rounds to 2 decimal places
  });

  it('handles negative numbers with ¥ symbol', () => {
    expect(toDollars(-10)).toBe('¥-10.00');
    expect(toDollars(-5.99)).toBe('¥-5.99');
  });

  it('handles very large numbers with ¥ symbol', () => {
    expect(toDollars(1000000)).toBe('¥1000000.00');
    expect(toDollars(9999999.99)).toBe('¥9999999.99');
  });

  it('handles edge cases with ¥ symbol', () => {
    expect(toDollars(0.009)).toBe('¥0.01'); // rounds up
    expect(toDollars(0.004)).toBe('¥0.00'); // rounds down
  });
});

describe('divideBy (current behavior)', () => {
  it('divides all elements except the first by divisor', () => {
    expect(divideBy([10, 20, 30], 2)).toEqual([5, 10, 15]);
  });

  it('leaves first element unchanged', () => {
    expect(divideBy([5, 10, 15], 5)).toEqual([1, 2, 3]);
  });

  it('returns empty array when input is empty', () => {
    expect(divideBy([], 10)).toEqual([]);
  });

  it('returns single-element array unchanged', () => {
    expect(divideBy([100], 10)).toEqual([10]);
  });
  it('does not modify the original', () => {
    const numbers = [2, 3, 4, 8];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([1, 1.5, 2, 4]); // Check the result
    expect(numbers).toEqual([2, 3, 4, 8]); // Check original is unchanged
  });
});

describe('multiplyBy edge cases', () => {
  it('handles numeric strings when they are values', () => {
    const input = { a: '5' }; // string '5' not number 5
    expect(multiplyBy(input, 2)).toEqual({ a: '5' });
  });

  it('handles Infinity values', () => {
    const input = { a: Infinity, b: -Infinity };
    expect(multiplyBy(input, 2)).toEqual({ a: Infinity, b: -Infinity });
  });

  it('handles NaN values', () => {
    const input = { a: NaN };
    expect(multiplyBy(input, 2)).toEqual({ a: NaN });
  });
});
