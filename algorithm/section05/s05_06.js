function solution(result) {
  const vote = {};
  const resultArray = result.split('');
  for (let element of resultArray) {
    if (!vote[element]) {
      vote[element] = 0;
    }
    vote[element]++;
  }

  let max = Number.MIN_SAFE_INTEGER;
  let representative = '';
  for (let property in vote) {
    if (vote[property] > max) {
      max = vote[property];
      representative = property;
    }
  }

  return representative;
}

console.log(solution('BACBACCACCBDEDE')); // C
