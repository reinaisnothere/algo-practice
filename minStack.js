var assert = require('assert');

var minStack = function() {
    
};

minStack.prototype.push = function(value) {};

minStack.prototype.top = function() {};

minStack.prototype.pop = function() {};

minStack.prototype.getMin = function() {};



var testMinStackPushAndTop = function() {
    var nonEmptyStack = new minStack();
    nonEmptystack.push(1);
    nonEmptystack.push(2);
    expect.equal(nonEmptyStack.top(), 2);
    
    var emptyStack = new minStack();
    expect.equal(emptyStack.top(), null);
};

var testMinStackPop = function() {
    var stack = new minStack();
    stack.push(1);
    stack.push(2);
    expect.equal(stack.pop(), 2);
    expect.equal(stack.top(), 1); //non empty
    
    stack.pop(); // now empty
    expect.equal(stack.pop(), null); // should return null for empty stack
};

var testMinStackGetMin = function() {
    var stack = new minStack();
    expect.equal(stack.getMin(), null); // should return null for empty stack
    stack.push(1);
    stack.push(0);
    stack.push(3);
    expect.equal(stack.getMin(), 0);
};
