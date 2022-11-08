function solution(hp) {
    let answer = 0;
    let i = parseInt(hp / 5);
    let j = parseInt((hp-i*5)/3);
    let k = hp - i*5 - j*3 ;
    answer = i + j + k ;
    return answer;
}