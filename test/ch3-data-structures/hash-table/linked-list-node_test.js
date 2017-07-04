var assert = require('../../../_vendor/chai').assert;
var Node = require('../../../src/ch3-data-structures/hash-table/linked-list-node');

describe("Doubly Linked List Node", function() {
  var node = new Node("key1", 1);

  it("has a key", function() {
    assert.equal(node.key, "key1");
  });

  it("has a value", function() {
    assert.equal(node.value, 1)
  })

  it("has a pointer to a previous node", function() {
    assert.equal(node.prev, null);
  });

  it("has a pointer to a next node", function() {
    assert.equal(node.next, null);
  });
});
