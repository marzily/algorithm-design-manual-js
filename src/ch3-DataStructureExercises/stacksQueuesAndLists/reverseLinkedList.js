/* Problem 3-2, page 99
Write a program to reverse the direction of a given singly-linked list. In
other words, after the reversal all pointers should now point backwards. Your
algorithm should take linear time. */

function LinkedList(val) {
  this.data = val;
  this.next = null;
  this.length = 1;
}

LinkedList.prototype.append = function(val) {
  var current = this;

  while (current.next !== null) {
    current.length += 1;
    current = current.next;
  }

  current.length += 1;
  current.next = new LinkedList(val);
};

LinkedList.prototype.reverse = function(head) {
  if (head.next === null) {
    return head;
  }

  var newHead = head.next;
  var restOfList = newHead.next;

  head.next = null;
  newHead.next = head;

  while (restOfList !== null) {
    var oldNode = newHead;
    newHead = restOfList;
    restOfList = restOfList.next;

    newHead.next = oldNode;
  }

  return newHead;
}

module.exports = LinkedList;
