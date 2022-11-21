function solution(n) {
    let pizzaNum = [];
    for(let i=1;i<=n;i++){
        if((i*6)%n == 0){
            pizzaNum.push(i);
        }
    }
    return pizzaNum[0];
}