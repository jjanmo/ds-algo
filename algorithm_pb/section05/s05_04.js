function solution1(array, total) {
  let count = 0;
  // 1개 짜리
  for (let value of array) {
    if (total >= value) count++;
  }

  // 2개 이상
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    for (let j = i; array.length; j++) {
      sum += array[j];
      if (sum > total) break;
      else {
        count++;
      }
    }
  }

  return count;
}

console.log(solution1([1, 3, 1, 2, 3], 5)); // 10

function solution2(array, total) {
  let left = 0,
    right = 0,
    sum = array[0],
    count = 0;

  while (right < array.length) {
    if (sum < total) {
      count++;
      right++;
      sum += array[right];
    } else {
      while (left < right) {
        if (sum === total) count++;
        left++;
        sum -= array[left];
        count++;
      }
    }
  }

  return count;
}

console.log(solution2([1, 3, 1, 2, 3], 5)); // 10

function solution3(array, total) {
  let left = 0,
    right = 0,
    sum = array[0],
    count = 0;

  while (right < array.length) {
    if (sum <= total) {
      count += right - left + 1;
      right++;
      sum += array[right];
    } else {
      sum -= array[left];
      left++;
    }
  }

  return count;
}

console.log(solution3([1, 3, 1, 2, 3], 5)); // 10

/*
solution3에 대한 로직 설명

right가 이동할 때 마다 그 합이 total보다 작거나 같다면
right를 포함하는 부분집합의 개수를 센다.

@Q@Q
sum의 초기값을 설정을 안해주면 로직상 오류가 난다.
이를 수정하고 싶은데 어떤식으로 고쳐야할지 ...
while문이라서 그런 것 같다.

로직
1. sum 더하고
2. sum 체크
3. count 체크
4. right 이동(더하기)
-----------------
1. sum 빼고
2. sum 체크
3. left 이동(더하기)
*/
