var Node = require('../../../src/ch3-data-structures/hash-table/linked-list-node');

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.append = function(val) {
  if (this.head === null) {
    this.head = new Node(val);
    return;
  }

  var current = this.head;
  while (current.next !== null) {
    current = current.next;
  }

  var newNode = new Node(val);
  current.next = newNode;
  newNode.prev = current;
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
