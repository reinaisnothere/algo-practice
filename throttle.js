var throttle = function(func, wait, immediate) {
  var needsToWait = false;
  var result;
  var args;
  var context;
  return function() {
    args = arguments;
    context = this;
    if (!needsToWait) {
      result = func.apply(this, arugments);
      needsToWait = true;
      setTimeout(function() {
        needsToWait = false;
      }, wait);
    }
    return result;
  };
};
