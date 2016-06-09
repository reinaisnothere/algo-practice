var debounce = function(func, wait, immediate) {
  var timeout;
  var result;
  var lastCalled;
  var context;
  var args;
  var firstInvocation = true;

  function reset() {
    result = func.apply(context, args);
    timeout = null;
  }

  return function() {
    args = Array.prototype.slice.apply(arguments);
    context = this;
    if (firstInvocation) {
      if (immediate) {
        result = func.apply(context, args);
      } else {
        timeout = setTimeout(reset, wait);
      }
      firstInvocation = false;
    } else {
      if (!timeout) {
        if (Date.now - lastCalled > wait) {
          result = func.apply(context, args);
        } else {
          timeout = setTimeout(reset, wait - (Date.now - lastCalled));
        }
      }
    }
    lastCalled = Date.now;
    return result;
  }
};
