// Based on documentation for Java Hash Table

function HashTable(inputSize) {
  this.inputSize = inputSize;
  this.loadFactor = 0.75;
  this.initializeBins();
}

HashTable.prototype.initializeBins = function() {
  var lengthBins = Math.ceil(this.inputSize / this.loadFactor);
  this.bins = new Array(lengthBins);
};

HashTable.prototype.resetSize = function(inputSize) {
  this.inputSize = inputSize;

  var maxSize = this.loadFactor * this.bins.length;
  var minSize = this.loadFactor * (this.bins.length / 2);

  if (this.inputSize > minSize && this.inputSize <= maxSize) {
    return;
  } else if (this.inputSize > maxSize) {
    var newBinLength = this.bins.length * 2;
  } else if (this.inputSize <= minSize) {
    var newBinLength = this.bins.length / 2;
  }

  this.remapElements(newBinLength);
};

HashTable.prototype.remapElements = function(newBinLength) {
  var newBins = new Array(newBinLength);

  var i = 0;
  while (this.bins[i] != undefined) {
    newBins[i] = this.bins[i];
    i++;
  }

  this.bins = newBins;
};

HashTable.prototype.set = function(key) {

};

module.exports = HashTable;
