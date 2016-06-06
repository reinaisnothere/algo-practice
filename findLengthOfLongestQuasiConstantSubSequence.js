function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var copy = A.slice();
    copy.sort();
    var smallestInt = copy[0];
    var longestRunLength = 1;
    var currentLowRunLength = 1;
    var currentHighRunLength = 0;
    for (var i = 1; i < copy.length; i++) {
        if (copy[i] === smallestInt) {
            currentLowRunLength++;
        } else if (copy[i] - smallestInt === 1) {
            currentHighRunLength++;
        } else {
            longestRunLength = Math.max(currentLowRunLength + currentHighRunLength, longestRunLength);
            if (copy[i] - smallestInt === 2 && currentHighRunLength) {
                smallestInt = copy[i - 1];
                currentLowRunLength = currentHighRunLength;
                currentHighRunLength = 1;
            } else {
                smallestInt = copy[i];
                currentLowRunLength = 1;
                currentHighRunLength = 0;
            }
        }
    }
    return longestRunLength;
}

var test = function() {
    var a = [3, 2, 3, 2, 4, 4, 3];
    var b = solution(a);
    console.log(b === 5);
};

test();