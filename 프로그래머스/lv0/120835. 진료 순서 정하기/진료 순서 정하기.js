function solution(emergency) {
    let answer = 
    [...emergency].sort((a,b)=>b-a);
    
    return emergency.map((i)=>answer.indexOf(i)+1);
}