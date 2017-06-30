var assert = require('../../../_vendor/chai').assert;
var LinkedList = require('../../../src/ch3-data-structures/hash-table/doubly-linked-list');
var Node = require('../../../src/ch3-data-structures/hash-table/linked-list-node');

describe("Doubly Linked List", function() {
  describe("Basic Attributes", function() {
    var emptyList = new LinkedList();

    it("has a head", function() {
      assert.equal(emptyList.head, null);
    });

    it("has a tail", function() {
      assert.equal(emptyList.tail, null);
    });
  });

  describe("Operations", function() {
    var list = new LinkedList()
    it("lets you append a node", function() {
      list.append(1);

      assert.equal(list.head.data, 1);
      assert.equal(list.head.prev, null);
      assert.equal(list.head.next, null);
    });

    it("updates its tail when a node is appended", function() {


    });

    xit("sets pointers correctly when there are multiple nodes", function () {



    });
  });
});
