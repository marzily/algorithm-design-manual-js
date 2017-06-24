/* Problem 3-2, page 99
Write a program to reverse the direction of a given singly-linked list. In
other words, after the reversal all pointers should now point backwards. Your
algorithm should take linear time. */

function Node(val) {
  this.data = val;
  this.next = null;
  this.length = 1;
}

Node.prototype.append = function(val) {
  var current = this;

  while (current.next !== null) {
    current.length += 1;
    current = current.next;
  }

  current.length += 1;
  current.next = new Node(val);
};

Node.prototype.reverse = function() {
  if (this.next === null) {
    return;
  }

  // var old_head = this;
  // var current = this.next;
  //
  // while (new_head.next !== null) {
  //
  // }
  //
  // return new_head;
}

module.exports = Node;
