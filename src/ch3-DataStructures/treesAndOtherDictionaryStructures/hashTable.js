/* Problem 3-4, page 99
Design a dictionary structure in which search, insertion, and deletion can all
be processed in O(1) time in the worst case. You may assume the set elements are
integers drawn from a finite set 1, 2, .., n, and initialization can take O(n)
time. */

function HashTable() {
  this.inputSize = 0;
  this.loadFactor = 0.75;
  this.bins = [];
}

HashTable.prototype.checkInputSize = function() {

};


function checkInputSize(inputSize) {
  
}




HashTable.prototype.sizeBins = function(inputSize) {
  this.inputSize = inputSize;
  this.bins = new Array(this.inputSize / this.loadFactor);
};






module.exports = HashTable;
