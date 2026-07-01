function throttle(func, wait, options = { leading: true, trailing: true }) {
  let timer = null;
  let lastArgs = null;

  const next = () => {
    if (!lastArgs) {
      timer = null;
      return;
    }

    func(...lastArgs);
    lastArgs = null;
    timer = setTimeout(next, wait);
  };

  return (...args) => {
    if (!options.leading && !options.trailing) return;

    if (timer) {
      if (options.trailing) lastArgs = args;
      return;
    }

    if (options.leading) {
      func(...args);
    } else if (options.trailing) {
      lastArgs = args;
    }

    timer = setTimeout(next, wait);
  };
}