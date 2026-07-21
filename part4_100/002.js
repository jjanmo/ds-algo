/**
 * 배열의 중복값을 제거하고 내림차순으로 정렬
 */

function solution(arr) {
  // 공통 엣지케이스 제거
  // if (sorted.length === 0) return [];

  // 1)
  // return [...new Set(arr)].sort((a, b) => b - a);

  // 2)

  const sorted = [...arr].sort((a, b) => b - a);

  const result = [sorted[0]];
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] !== sorted[i + 1]) {
      result.push(sorted[i + 1]);
    }
  }
  return result;
}

console.log(solution([4, 2, 2, 1, 3, 4])); // [4,3,2,1]
console.log(solution([2, 1, 1, 3, 2, 5, 4])); //[5,4,3,2,1]
