function solution(s) {
  let answer = true;
  let s_array = s.split('');
  if (s_array.length === 4 || s_array.length === 6) {
    for (let i = 0; i < s_array.length; i++) {
      if (isNaN(s_array[i])) {
        answer = false;
        break;
      }
    }
  } else {
    answer = false;
  }
  return answer;
}
