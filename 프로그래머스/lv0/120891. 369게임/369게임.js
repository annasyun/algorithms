function solution(numbers) {
    var answer = 0;
    let arr = String(numbers).split('');
    arr.forEach((i) => {
        if (i == 3 || i == 6 || i == 9) {
            answer += 1;
        }
    });
    return answer;
}
