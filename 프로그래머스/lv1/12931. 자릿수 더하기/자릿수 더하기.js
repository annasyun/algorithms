function solution(n) {
  const array = n.toString().split('');
  const answer = array.reduce(
    (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue),
    0
  );

  return answer;
}
