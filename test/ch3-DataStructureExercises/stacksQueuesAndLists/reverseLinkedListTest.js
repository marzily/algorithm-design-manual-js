var assert = require('../../../_vendor/chai').assert;
var Node = require('../../../src/ch3-DataStructureExercises/stacksQueuesAndLists/reverseLinkedList');

describe("2. Reverse a Singly-Linked List", function() {
  describe("Linked List", function() {
    var head = new Node(1);

    it("has data at its head node", function() {
      assert.equal(head.data, 1);
    });

    it("has a pointer to the next node at its head node", function() {
      assert.equal(head.next, null);
    });

    it("tracks its total length", function() {
      assert.equal(head.length, 1);
    });

    it("correctly assigns a new node to its next pointer", function() {
      head.append(2);

      assert.equal(head.next.data, 2);
    });

    it("tracks how many nodes there are in a list", function() {
      assert.equal(head.length, 2);

      head.append(3);

      assert.equal(head.length, 3);
    });
  });

  describe("Reverse Linked List", function() {
    var singleNode = new Node(0);

    it("there is no change if there is only one node", function() {
      singleNode.reverse();

      assert.equal(singleNode.data, 0);
      assert.equal(singleNode.next, null);
    });

    xit("reverses a singly-linked list", function() {
      head.reverse();

      assert.equal(head.data, 3);
      assert.equal(head.next.data, 2);
      assert.equal(head.next.next.data, 1);
    });
  });
});
