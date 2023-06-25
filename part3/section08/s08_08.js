function solution1(n, m) {
  const arr = Array.from({ length: n }, (v, i) => i + 1);
  const result = [];
  let count = 0;

  const recurse = (L) => {
    if (L === m) {
      const answer = result.join(' ');
      console.log(answer);
      count++;
    } else {
      for (let i = 0; i < arr.length; i++) {
        result[L] = arr[i];
        recurse(L + 1);
      }
    }
  };

  recurse(0);
  console.log(count);
}

// solution1(3, 2);
// solution1(4, 3);

//--- 23.06.20

function reSol1(n, m) {
  const result = [];
  const tmp = [];

  // const recur = () => {
  //   if (tmp.length === m) {
  //     result.push([...tmp]);
  //   } else {
  //     for (let i = 1; i <= n; i++) {
  //       tmp.push(i);
  //       recur();
  //       tmp.pop();
  //     }
  //   }
  // };

  // param {l} → level(깊이를 의미함!)
  // 위와 같은 풀이 (이건 강의에서 푼 풀이 스타일)
  const recur = (l) => {
    if (l === m) {
      result.push([...tmp]);
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[l] = i;
        recur(l + 1);
      }
    }
  };

  recur(0);
  console.log(result, result.length);
}

// reSol1(3, 2); // 9
// reSol1(4, 3); // 64

//---

function review(n, m) {
  const result = [];
  let count = 0;

  const dfs = () => {
    if (result.length === m) {
      console.log(result);
      count++;
      return;
    }

    for (let i = 1; i <= n; i++) {
      result.push(i);
      dfs();
      result.pop();
    }
  };

  dfs();
  console.log(count);
}

review(3, 2); // 9
review(4, 3); // 64
