var murmurHash3 = require('murmur-hash').v3.x86.hash32;
// Returns a 32bit hash as a unsigned int

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

  if (this.inputSize > this.loadFactor * this.bins.length) {
    var newBinLength = this.bins.length * 2;
  } else if (this.inputSize <= this.loadFactor * (this.bins.length / 2)) {
    var newBinLength = this.bins.length / 2;
  }

  if (newBinLength) this.remapElements(newBinLength);
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

HashTable.prototype.generateIndex = function(key) {
  return murmurHash3(key) % this.bins.length;
}

HashTable.prototype.set = function(key) {
  
};




module.exports = HashTable;
