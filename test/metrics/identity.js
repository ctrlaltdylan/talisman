/**
 * Talisman metrics/distance/identity tests
 * =========================================
 *
 */
import assert from 'assert';
import {distance, similarity} from '../../src/metrics/identity';

describe('identity', function() {

  it('should correctly compute identity distance/similarity.', function() {
    const ref = [1, 2];

    const tests = [
      ['a', 'b', 1],
      ['a', 'a', 0],
      [ref, ref, 0],
      ['ab', 'abc', 1],
      [[1, 2], [1, 2], 0],
      [[1, 3], [1, 2], 1]
    ];

    tests.forEach(function([a, b, d]) {
      assert.strictEqual(distance(a, b), d, `${a} / ${b} => ${d}`);
      assert.strictEqual(similarity(a, b), +!d, `${a} / ${b} => ${d}`);
    });
  });
});
