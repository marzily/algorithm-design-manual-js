var assert = require('../../../_vendor/chai').assert;
var HashTable = require('../../../src/ch3-DataStructures/misc/hashTable');

describe("4. Hash Table", function() {
  describe("basic attributes", function() {
    var hash = new HashTable(3);

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
    var testHash = new HashTable(3);

    it("allows insertion", function() {
      testHash.set("hello", "world");
      var indexKey = testHash.bins.indexOf("hello");
      var indexValue = testHash.bins.indexOf("world");

      assert.equal(indexKey, -1);
      assert.notEqual(indexValue, -1);
    });

  });
});
