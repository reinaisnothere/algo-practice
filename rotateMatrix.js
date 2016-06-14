var assert = require('assert');

function rotateMatrix(matrix) { // rotate clockwise
  var output = [];
  for (var i = 0; i < matrix.length; i++) { // i is row index
    for (var j = 0; j < matrix[0].length; j++) { // j is column index
      if (!output[j]) {
        output[j] = [];
      }
      output[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }
  return output;
}

function testRotateMatrix() {
  var matrix0 = [];
  assert.deepEqual(rotateMatrix(matrix0), []);
  var matrix1 = [ //(0, 1)
    [1, 2, 3], 
    [4, 5, 6]
  ];
  assert.deepEqual(rotateMatrix(matrix1), [[4, 1], [5, 2], [6, 3]]); //(1, 1)
}

testRotateMatrix();
