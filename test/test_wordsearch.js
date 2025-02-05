//written by P-Hansen and scarlet-128 for LHL pair programing assingment

const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function () {
  it("should return false if the word is not present", function () {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function () {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function () {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'U', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'B', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'L', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'E', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'BUBBLE')

    assert.isTrue(result);
  });
  it("should return true if the matrix array has empty arrays in it", function () {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'U', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'B', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'B', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'L', 'E', 'R', 'L'],
      [],
      [],
      ['O', 'D', 'C', 'A', 'E', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'BUBBLE')

    assert.isTrue(result);
  });
});
