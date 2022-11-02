function solution(my_string) {
    let regexp = /[aeiou]/g;
    let answer = my_string.replace(regexp,'');
    return answer;
}