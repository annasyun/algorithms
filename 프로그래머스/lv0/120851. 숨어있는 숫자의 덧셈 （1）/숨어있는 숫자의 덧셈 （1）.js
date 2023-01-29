function solution(my_string) {
    let sum = 0;
    let num = [1,2,3,4,5,6,7,8,9];
    let arr = my_string.split("");
    for(let i of arr){
        for(let j of num){
            if(i==j){
                sum+=parseInt(i);
            }
        }
    }
    return sum;
}
