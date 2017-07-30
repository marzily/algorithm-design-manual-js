var Node = require('./linked-list-node');

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.append = function(key, val) {
  var newNode = new Node(key, val);

  if (this.head === null) {
    this.head = this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode

    this.tail = newNode;
  }
};

LinkedList.prototype.get = function(key) {
  if (key === this.head.key) {
    return this.head;
  }

  var current = this.head.next;
  while (current) {
    if (current.key === key) {
      return current;
    }
    current = current.next;
  }

  return null;
};

LinkedList.prototype.delete = function(key) {
  var node = this.get(key);

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
