var throttle = function(func, wait, immediate) {
  var needsToWait = false;
  var result;
  var args;
  var context;
  return function() {
    args = arguments;
    context = this;
    if (!needsToWait) {
      if (immediate) {
        result = func.apply(context, args);
      }
      needsToWait = true;
      setTimeout(function() {
        needsToWait = false;
        if (!immediate) {
          result = func.apply(context, args);
        }
      }, wait);
    }
    return result;
  };
};
