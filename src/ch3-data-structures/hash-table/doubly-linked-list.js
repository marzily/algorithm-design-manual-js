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

LinkedList.prototype.get = function(val) {
  if (val === this.head.data) {
    return this.head;
  }

  var current = this.head.next;
  while (current) {
    if (current.data === val) {
      return current;
    }
    current = current.next;
  }

  return null;
};

LinkedList.prototype.delete = function(val) {
  var node = this.get(val);

  if (node === null) {
    return;
  }

  var nextNode = node.next;
  if (this.head === node) {
    this.head = nextNode;
    nextNode.prev = null;
  } else {
    var prevNode = node.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  return node;
}

module.exports = LinkedList;
