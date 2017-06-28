var assert = require('../../../_vendor/chai').assert;
var hashTable = require('../../../src/ch3-DataStructures/treesAndOtherDictionaryStructures/hashTable');

describe("4. Hash Table", function() {
  describe("basic attributes", function() {
    var hash = new hashTable(3);

    it("initializes with an input size", function() {
      assert.equal(hash.inputSize, 3);
    });

    it("has a load factor", function() {
      assert.equal(hash.loadFactor, 0.75);
    });

    it("has bins", function() {
      assert.isArray(hash.bins);
    });

    it("sizes bins based on its input size ", function() {
      assert.equal(hash.bins.length, 8);
    });

    it("resizes bins based on its input size ", function() {
      hash.resetSize(9);

      assert.equal(hash.inputSize, 9);
      assert.equal(hash.bins.length, 24);
    });
  });

  describe("operations", function() {
    // var hashWithInputs = new hashTable();

    xit("allows insertion", function() {

    });

  });
});
