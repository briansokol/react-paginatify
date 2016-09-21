import cx from '../esm/cx';

describe('cx', () => {

  it('should return all input strings joined by spaces', () => {
    expect(cx('a')).toBe('a');
    expect(cx('a', 'b')).toBe('a b');
  });

  it('should evaluate values of object maps', () => {
    expect(cx({ 'a': 2 > 1 })).toBe('a');
    expect(cx({ 'a': 2 < 1 })).toBe('');
    expect(cx({ 'a': 2 < 1, 'b': 2 > 1 })).toBe('b');
    expect(cx({ 'a': 2 > 1, 'b': 2 > 1 })).toBe('a b');
    expect(cx({ 'a': 2 > 1}, { 'b': 2 > 1 })).toBe('a b');
  });

  it('should ignore anything not a string or object', () => {
    expect(cx(['a', 'b'])).toBe('');
    expect(cx(1)).toBe('');
    expect(cx(['a', 'b'], 'c', 2, 'd')).toBe('c d');
    expect(cx({ 'a': true })).not.toBe('');
    expect(cx('a')).not.toBe('');
    expect(cx(null)).toBe('');
    expect(cx(undefined)).toBe('');
  });

});
