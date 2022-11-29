function solution(numbers) {
    let newArr =[];
    // let newArr = numbers.sort((a,b)=>a-b)
    for(let i=0;i<numbers.length;i++){
        for(let j=1;j<numbers.length;j++){
            if(i!==j){
            newArr.push(numbers[i]*numbers[j]);
            }
        }
    }
    console.log(newArr);
    return Math.max(...newArr);
}