
// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return curryInnerFn = (...args) => {
    if (fn.length <= args.length && !args.slice(0, fn.length).includes(curry.placeholder)) return fn(...args);

    return (...args2) => {
      const res = args.map((arg) => arg === curry.placeholder && args2.length ? args2.shift() : arg);

      return curryInnerFn(...res, ...args2);
    }
  }
}

curry.placeholder = Symbol();

const  join = (a, b, c) => {
  return `${a}_${b}_${c}`;
}
const curriedJoin = curry(join);
const _ = curry.placeholder;

console.log(curriedJoin(1, 2, 3));
console.log(curriedJoin(_, 2)(1, 3));
console.log(curriedJoin(_, _, _)(1)(_, 3)(2));