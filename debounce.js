var debounce = function(func, wait, immediate) {
  var timeout;
  var result;
  var context;
  var args;

  function reset() {
    if (!immediate) {
      result = func.apply(context, args);
    }
    timeout = null;
  }

  return function() {
    args = Array.prototype.slice.apply(arguments);
    context = this;
    var callNow = immediate && (!timeout);
    if (timeout) {
      clearTimeout(timeout);
    }
    if (callNow) {
      result = func.apply(context, args);
    }
    timeout = setTimeout(reset, wait);
    return result;
  }
};
