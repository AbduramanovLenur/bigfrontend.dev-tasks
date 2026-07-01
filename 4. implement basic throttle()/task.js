function throttle(func, wait) {
  let timer = null;
  let lastArgs = null;

  function next() {
    if (!lastArgs) {
      timer = null;
      return;
    }

    func(...lastArgs);
    lastArgs = null;

    timer = setTimeout(next, wait);
  }

  return (...args) => {
    if (!timer) {
      func(...args);
      timer = setTimeout(next, wait);
    } else {
      lastArgs = args;
    }
  };
}