// This is a JavaScript coding problem from BFE.dev 
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

// Variant 1
function flat(arr, depth = 1) {
  const result = [];
  
  function flatten(array, depth) {
    array.forEach((elem) => {
      if (Array.isArray(elem) && depth) {
        flatten(elem, depth - 1);
      } else {
        result.push(elem);
      }
    });
  }
  
  flatten(arr, depth);
  
  return result;
}

console.log(flat([1, [2, [4]]], 1));

// Variant 2
function flat(arr, depth = 1) {
  return arr.reduce((acc, elem) => {
    if (Array.isArray(elem) && depth) {
      return acc.concat(flat(elem, depth - 1));
    }
    return acc.concat(elem);
  }, []);
}

console.log(flat([1, [2, [4]]], 1));