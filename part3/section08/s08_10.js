// n개 중에서 m개를 뽑는 경우의 수
function solution(n, m, array) {
  const visited = Array.from({ length: n }, (_) => false);
  const tmp = Array.from({ length: m });
  const result = [];
  let count = 0;

  const dfs = (level) => {
    if (level === m) {
      count++;
      result.push([...tmp]); // spread operator : tmp가 배열(객체)이기 때문에 주소값을 공유하고 있어서 깊은 복사가 필요
    } else {
      for (let i = 0; i < n; i++) {
        if (!visited[i]) {
          visited[i] = true;
          tmp[level] = array[i];
          dfs(level + 1);

          // Q. 아래 코드의 의미는??
          // 다시 반복할 때 앞에서부터 시작할수 있게끔 만들어주는 코드
          visited[i] = false;
        }
      }
    }
  };

  dfs(0);
  console.log(result, count);
}

// solution(3, 2, [3, 6, 9]); // 6
// solution(4, 2, [1, 3, 6, 9]); // 12

//---

// arr 안의 숫자 중에서 m개를 뽑는
function review1(arr, m) {
  const checked = [];
  const tmp = [];
  let count = 0;

  const dfs = () => {
    if (tmp.length === m) {
      count++;
      console.log('✔️', tmp.join(' '));
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!checked[i]) {
        checked[i] = 1;
        tmp.push(arr[i]);
        dfs();
        checked[i] = 0;
        tmp.pop();
      }
    }
  };

  dfs();
  console.log(count);
}

review1([3, 6, 9], 2); // 6
// review1([1, 3, 6, 9], 2); // 12
