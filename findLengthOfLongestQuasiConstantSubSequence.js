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
            longestRunLength = Math.max(currentLowRunLength + currentHighRunLength, longestRunLength); 
        } else if (copy[i] - smallestInt === 1) {
            currentHighRunLength++;
            longestRunLength = Math.max(currentLowRunLength + currentHighRunLength, longestRunLength);
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
    var c = [2, 3, 4, 1, 2, 5, 6, 5, 5];
    var d = solution(c);
    console.log(d === 4);
    var e = [1, 1, 1, 1];
    var f = solution(e);
    console.log(f === 4);
    var g = [1, 2, 1, 2];
    var h = solution(g);
    console.log(h === 4);
};

test();