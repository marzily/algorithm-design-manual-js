var assert = require('../../../_vendor/chai').assert;
var Node = require('../../../src/ch3-data-structures/hash-table/linked-list-node');

describe("Doubly Linked List Node", function() {
  var node = new Node(1);

  it("has data", function() {
    assert.equal(node.data, 1);
  });

  it("has a pointer to a previous node", function() {
    assert.equal(node.prev, null);
  });

  it("has a pointer to a next node", function() {
    assert.equal(node.next, null);
  });
});
