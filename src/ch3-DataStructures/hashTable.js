function HashTable(inputSize) {
  this.inputSize = inputSize;
  this.loadFactor = 0.75;
  this.sizeBins();
}

HashTable.prototype.sizeBins = function() {
  var lengthBins = Math.ceil(this.inputSize / this.loadFactor) * 2;
  this.bins = new Array(lengthBins);
};

HashTable.prototype.resetSize = function(inputSize) {
  this.inputSize = inputSize;
  this.sizeBins();
};

HashTable.prototype.set = function(key) {

};

module.exports = HashTable;
