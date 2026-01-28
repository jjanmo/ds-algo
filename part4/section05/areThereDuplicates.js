function areThereDuplicates(...params) {
  //sol1
  // return params.length !== new Set(params).size;

  //sol2
  const map = {};
  for (let num of params) {
    if (map[num]) return true;

    map[num] = 1;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
