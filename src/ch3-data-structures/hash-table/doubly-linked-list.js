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

  if (this.head === this.tail && this.head === node) {
    this.head = this.tail = null;
  } else if (this.head === node) {
    var nextNode = node.next;
    this.head = nextNode;
    this.head.prev = null;
  } else if (this.tail === node) {
    var prevNode = node.prev;
    this.tail = prevNode;
    this.tail.next = null;
  } else {
    var nextNode = node.next;
    var prevNode = node.prev;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  return node;
}

module.exports = LinkedList;
