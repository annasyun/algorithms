
3
4
5
6
7
8
9
10
11
12
13
function solution(dot) {
    var answer = 0;
    const x = dot[0];
    const y = dot[1];

    if (x > 0 && y > 0) answer = 1
    if (x < 0 && y > 0) answer = 2
    if (x < 0 && y < 0) answer = 3
    if (x > 0 && y < 0) answer = 4

    return answer;
}