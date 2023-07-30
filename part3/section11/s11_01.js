function solution(string) {
  const map = [...string].reduce(
    (acc, char) => ({
      ...acc,
      [char]: acc[char] + 1 || 1,
    }),
    {}
  );

  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc, item) => acc + item[0].repeat(item[1]), '');
}

console.log(solution('aaAAcccbbbBB')); // cccbbbAABBaa
console.log(solution('kdkDKKGkdkgks')); // kkkkkKKddDGgs
