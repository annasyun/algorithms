function solution(n, k) {
    let sum = (12000*n)+(2000*k);
    if(n>=10){
        for(let i = 1;n/10>=i;i++){
            sum-=2000;
        }
    }
    return sum;
}