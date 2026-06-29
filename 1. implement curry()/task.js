/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
}

const curry = (fn) => {
  return curryInnerFn = (...args) => {
    if (args.length >= fn.length) return fn(...args);
    return (...args2) => curryInnerFn(...args, ...args2);
  }
}

const curriedJoin = curry(join);

curriedJoin(1, 2, 3); // '1_2_3'
curriedJoin(1)(2, 3); // '1_2_3'
curriedJoin(1, 2)(3); // '1_2_3'