var assert = require('../../../_vendor/chai').assert;
var LinkedList = require('../../../src/ch3-data-structures/hash-table/doubly-linked-list');

describe("Doubly Linked List", function() {
  describe("Basic Attributes", function() {
    var head = new LinkedList(1);

    it("has data at its head node", function() {
      assert.equal(head.data, 1);
    });

    it("has a pointer to a previous node", function() {
      assert.equal(head.prev, null);
    });

    it("has a pointer to a next node", function() {
      assert.equal(head.next, null);
    });

    it("tracks its total length", function() {
      assert.equal(head.length(), 1);
    });

    it("correctly assigns a new node to its next pointer", function() {
      head.append(2);

      assert.equal(head.next.data, 2);
      assert.equal(head.next.prev.data, 1);
    });

    xit("tracks how many nodes there are in a list", function() {
      assert.equal(head.length(), 2);

      head.append(3);

      assert.equal(head.length(), 3);
    });
  });
});
