function solution(numbers) {
    var answer = 0;
    const 제일큰수 = numbers.splice(numbers.indexOf(Math.max(...numbers)),1);
    const 두번째큰수 = numbers.splice(numbers.indexOf(Math.max(...numbers)),1);
    answer = 제일큰수 * 두번째큰수;
    return answer;
}