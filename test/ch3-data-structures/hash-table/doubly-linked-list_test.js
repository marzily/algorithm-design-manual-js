var assert = require('../../../_vendor/chai').assert;
var LinkedList = require('../../../src/ch3-data-structures/hash-table/doubly-linked-list');
var Node = require('../../../src/ch3-data-structures/hash-table/linked-list-node');

describe("Doubly Linked List", function() {
  describe("Basic Attributes", function() {
    var list = new LinkedList();

    it("has a head", function() {
      assert.equal(list.head, null);
    });

    it("has a tail", function() {
      assert.equal(list.tail, null);
    });

    xit("assigns its head to a node", function() {
      assert.equal(list.head.data);
    });

    xit("points its tail to the correct node if there is only one", function() {

    });

    xit("tracks its total length", function() {
      assert.equal(head.length(), 1);
    });

    xit("correctly assigns a new node to its next pointer", function() {
      head.append(2);

      assert.equal(head.next.data, 2);
      assert.equal(head.next.prev.data, 1);
    });

    xit("tracks how many nodes there are in a list", function() {
      assert.equal(head.length(), 2);

      head.append(3);

      assert.equal(head.length(), 3);
    });

    xit("has a pointer to its tail", function() {

    });
  });
});
