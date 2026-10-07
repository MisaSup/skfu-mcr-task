import { test } from 'node:test';
import assert from 'node:assert';
import { factorial, fibonacci, palindrome, isFalsy, keepRepeated, uniqueChars } from '../tasks/optional.js';

test('task-optional-00 factorial', () => {
    assert.strictEqual(factorial(0), 1);
    assert.strictEqual(factorial(1), 1);
    assert.strictEqual(factorial(2), 2);
    assert.strictEqual(factorial(3), 6);
    assert.strictEqual(factorial(5), 120);
    assert.strictEqual(factorial(7), 5040);
    assert.strictEqual(factorial(10), 3628800);
    assert.strictEqual(factorial(12), 479001600);
});

test('task-optional-01 fibonacci', () => {
    assert.strictEqual(fibonacci(-5), -1);
    assert.strictEqual(fibonacci(-1), -1);
    assert.strictEqual(fibonacci(0), 0);
    assert.strictEqual(fibonacci(1), 1);
    assert.strictEqual(fibonacci(2), 1);
    assert.strictEqual(fibonacci(3), 2);
    assert.strictEqual(fibonacci(4), 3);
    assert.strictEqual(fibonacci(5), 5);
    assert.strictEqual(fibonacci(6), 8);
    assert.strictEqual(fibonacci(7), 13);
    assert.strictEqual(fibonacci(8), 21);
    assert.strictEqual(fibonacci(9), 34);
    assert.strictEqual(fibonacci(10), 55);
});

test('task-optional-02 isFalsy', () => {
    assert.ok(isFalsy(null));
    assert.ok(isFalsy(undefined));
    assert.ok(isFalsy(false));
    assert.ok(isFalsy(0));
    assert.ok(isFalsy(''));
    assert.ok(!isFalsy(' '));
    assert.ok(!isFalsy([]));
    assert.ok(!isFalsy({}));
    assert.ok(isFalsy(NaN));
    assert.ok(!isFalsy(Infinity));
    assert.ok(!isFalsy(-Infinity));
    assert.ok(!isFalsy(new Date()));
    assert.ok(!isFalsy(Symbol()));
    assert.ok(!isFalsy(new RegExp('a', 'g')));
});

test('task-optional-03 palindrome', () => {
    assert.ok(palindrome(''));
    assert.ok(palindrome('w'));
    assert.ok(!palindrome('word'));
    assert.ok(palindrome('racecar'));
});

test('task-optional-04 keepRepeated', () => {
    assert.strictEqual(keepRepeated(''), '');
    assert.strictEqual(keepRepeated('aabbc'), 'aabb');
    assert.strictEqual(keepRepeated('Hello'), 'll');
    assert.strictEqual(keepRepeated('AaBb'), 'AaBb');
    assert.strictEqual(keepRepeated('a1a11'), 'a1a11');
    assert.strictEqual(keepRepeated('abcdef'), '');
    assert.strictEqual(keepRepeated('112233'), '112233');
});

test('task-optional-05 uniqueChars', () => {
    assert.strictEqual(uniqueChars(''), '');
    assert.strictEqual(uniqueChars('aabbc'), 'abc');
    assert.strictEqual(uniqueChars('Hello'), 'Helo');
    assert.strictEqual(uniqueChars('AaBb'), 'AB');
    assert.strictEqual(uniqueChars('12321'), '123');
    assert.strictEqual(uniqueChars('abc'), 'abc');
});
