var assert = require('../../../_vendor/chai').assert;
var hashTable = require('../../../src/ch3-DataStructures/treesAndOtherDictionaryStructures/hashTable');

describe("4. Hash Table", function() {
  it("initializes with an input size", function() {
    var hash = new hashTable(3);

    assert.equal(hash.inputSize, 3);
  });

  xit("has a load factor", function() {
    assert.equal(hash.loadFactor, 0.75);
  });

  xit("has bins", function() {
    assert.isArray(hash.bins);
  });

  xit("resizes bins if its input size increases", function() {
    assert.equal(hash.bins.length, 0);

    hash.increaseInputSize(3);

    assert.equal(hash.bins.length, 8);
  });

  xdescribe("hash table operations", function() {
    var hashWithInputs = new HashTable();

    xit("allows insertion", function() {

    });

  });
});
