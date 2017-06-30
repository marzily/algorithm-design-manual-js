var Node = require('../../../src/ch3-data-structures/hash-table/linked-list-node');

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.append = function(val) {
  if (this.head === null) {
    this.head = this.tail = new Node(val);
  } else {
    var newNode = new Node(val);

    newNode.prev = this.tail;
    this.tail.next = newNode

    this.tail = newNode;
  }
};

LinkedList.prototype.length = function() {
  var current = this;
  var length = 1;

  while (current.next !== null) {
    length += 1;
    current = current.next;
  }

  return length;
};

module.exports = LinkedList;
