function LinkedList(val) {
  this.data = val;
  this.prev = null;
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

module.exports = LinkedList;
