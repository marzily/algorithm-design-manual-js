/* Problem 3-4, page 99
Design a dictionary structure in which search, insertion, and deletion can all
be processed in O(1) time in the worst case. You may assume the set elements are
integers drawn from a finite set 1, 2, .., n, and initialization can take O(n)
time. */

function HashTable(inputSize) {
  this.inputSize = inputSize;
  this.loadFactor = 0.75;
  this.sizeBins();
}

HashTable.prototype.sizeBins = function() {
  var lengthBins = (this.inputSize / this.loadFactor) * 2;
  this.bins = new Array(lengthBins);
};

HashTable.prototype.resetSize = function(inputSize) {
  this.inputSize = inputSize;
  this.sizeBins();
};

module.exports = HashTable;
