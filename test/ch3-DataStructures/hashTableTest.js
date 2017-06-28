var assert = require('../../_vendor/chai').assert;
var HashTable = require('../../src/ch3-DataStructures/hashTable');

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
      assert.equal(hash.bins.length, 4);
    });

    it("grows bins if input size exceeds load factor", function() {
      hash.resetSize(5);
      assert.equal(hash.inputSize, 5);
      assert.equal(hash.bins.length, 8);
    });

    xit("shrinks bins if input size shrinks below threshold", function() {
      hash.resetSize(2);
      assert.equal(hash.inputSize, 2);
      assert.equal(hash.bins.length, 4);
    });
  });

  describe("operations", function() {
    var testHash = new HashTable(3);

    xit("allows insertion", function() {
      testHash.set("hello", "world");
      var indexKey = testHash.bins.indexOf("hello");
      var indexValue = testHash.bins.indexOf("world");

      assert.equal(indexKey, -1);
      assert.notEqual(indexValue, -1);
    });

  });
});
