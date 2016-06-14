var assert = require('assert');

function rotateMatrix(matrix) {
  var output = [];
  for (var i = 0; i < matrix.length; i++) { // i is row index
    for (var j = 0; j < matrix[0].length; j++) { // j is column index

    }
  }
}

function testRotateMatrix() {
  var matrix1 = [
    [1, 2, 3], 
    [4, 5, 6]
  ];
  assert.deepEqual(rotateMatrix(matrix1), [[4, 1], [5, 2], [6, 3]]);
}

testRotateMatrix();
