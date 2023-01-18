function solution(sides) {
    sides.sort((a,b)=>b-a);
    return parseInt(sides[0])<parseInt(sides[1])+ parseInt(sides[2])?1:2;
};