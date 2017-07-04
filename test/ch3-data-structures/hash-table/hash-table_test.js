var assert = require('../../../_vendor/chai').assert;
var HashTable = require('../../../src/ch3-data-structures/hash-table/hash-table');
var murmurHash3 = require('murmur-hash').v3.x86.hash32;

describe("Hash Table", function() {
  describe("Basic Attributes", function() {
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

    it("shrinks bins if input size shrinks below threshold", function() {
      hash.resetSize(2);
      assert.equal(hash.inputSize, 2);
      assert.equal(hash.bins.length, 4);
    });

    it("doesn't change size of bins if new input size does not breach thresholds", function() {
      hash.resetSize(3);
      assert.equal(hash.inputSize, 3);
      assert.equal(hash.bins.length, 4);
    });
  });

  describe("Operations", function() {
    var testHash = new HashTable(3);

    it("hashes a key to an index within the range of the size of the bins", function() {
      var i = testHash.generateIndex("hello");

      assert.isAbove(i, -1);
      assert.isBelow(i, testHash.bins.length);
    });

    it("inserts and extracts a value", function() {
      testHash.set("hello", "world");
      var val = testHash.get("hello");

      assert.equal(val, "world");
    });

    xit("handles collisions", function() {
      var i = testHash.generateIndex("hello");

      testHash.bins[i] = "collision!";

      assert.equal(testHash.get("hello"), "world");
    });

  });
});
