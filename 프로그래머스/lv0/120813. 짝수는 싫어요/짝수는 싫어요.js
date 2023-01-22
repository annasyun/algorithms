function solution(n) {
    return Array(n).fill(1).map((_,i) => ++i).filter(i=>i%2===1);
;
}