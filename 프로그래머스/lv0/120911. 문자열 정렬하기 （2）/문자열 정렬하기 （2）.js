function solution(my_string) {
    let answer = '';
    let arr = my_string.split("");
    for(let i = 0;i < arr.length;i++){
        arr[i] = arr[i].toLowerCase();
    }
    // console.log(arr);
    return arr.sort().join("");
}