/* Problem 3-2, page 99
Write a program to reverse the direction of a given singly-linked list. In
other words, after the reversal all pointers should now point backwards. Your
algorithm should take linear time. */

function LinkedList(val) {
  this.data = val;
  this.next = null;
}

LinkedList.prototype.append = function(val) {
  var current = this;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = new LinkedList(val);
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

LinkedList.prototype.reverse = function() {
  if (this.next === null) {
    return this;
  }

  var newHead = this.next;
  var restOfList = newHead.next;

  this.next = null;
  newHead.next = this;

  while (restOfList !== null) {
    var oldNode = newHead;
    newHead = restOfList;
    restOfList = restOfList.next;

    newHead.next = oldNode;
  }

  return newHead;
};

module.exports = LinkedList;
