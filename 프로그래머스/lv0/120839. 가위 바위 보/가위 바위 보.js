function solution(rsp) {
    let rspArr = rsp.split("");
    console.log(rspArr);
    let newArr = [];
    for(let i=0;i<rspArr.length;i++){
        switch (parseInt(rspArr[i])) {
            case 2:
                rspArr[i] = 0
                break;
            case 0:
                rspArr[i] = 5
                break;
            case 5:
                rspArr[i] = 2
                break;
        }
        newArr.push(rspArr[i]);
    }
    console.log(newArr);
    return newArr.join("");
}