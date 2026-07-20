function solution(arr) {
  // 1)
  // return arr.sort((a, b) => a - b);
  // 2)
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] > arr[j]) {
  //       const tmp = arr[i];
  //       arr[i] = arr[j];
  //       arr[j] = tmp;
  //     }
  //   }
  // }
  // return arr;
  //3) 좀 더 정석적인 선택정렬
  // for (let i = 0; i < arr.length - 1; i++) {
  //   let minIdx = i;
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[j] < arr[minIdx]) {
  //       minIdx = j;
  //     }
  //   }
  //   if (minIdx !== i) {
  //     const tmp = arr[i];
  //     arr[i] = arr[minIdx];
  //     arr[minIdx] = tmp;
  //   }
  // }
  // return arr;
  // 4) 버블정렬 > 버블 정렬이 큰 수가 뒤로 밀려나가는 개념(arr.length - 1 - i)
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // 최적화를 위한 코드 > 버블정렬을 최적화를 위한 코드를 추가할 수 있음
  }
  return arr;
}

console.log(solution([1, -5, 2, 4, 3])); // -5,1,2,3,4
console.log(solution([2, 1, 1, 3, 2, 5, 4])); // 1,1,2,2,3,4,5
console.log(solution([6, 1, 7])); // 1,6,7
console.log(solution([5, 3, 1, 4])); // 1,3,4,5

/**
 * 선택정렬 : 작은값(최솟값)을 찾아서 맨 앞(선택자리)으로 이동 > 확정된 맨 앞자리는 다시 볼 필요 없음 > 시작값을 줄일수 있음
 * 버블정렬 : 인접한 값끼리 비교하여 스왑 > 가장 큰 값이 뒤로 밀리는 시스템 > 끝값을 줄일수 있음
 */
