
function quicksort(array) {
   if (array.length <= 1) {
	   return array;
  }

  var opora = array[0];
  var left = []; 
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < opora ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(opora, quicksort(right));
};

var myMassiv = [77, 18, 85, 8, 33, 97, 22];
var sorted = quicksort(myMassiv);

console.log('Sorted array', sorted);