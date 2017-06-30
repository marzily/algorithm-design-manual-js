var Node = require('../../../src/ch3-data-structures/hash-table/linked-list-node');

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.append = function(val) {
  var current = this;

  while (current.next !== null) {
    current = current.next;
  }

  var newNode = new LinkedList(val);
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
