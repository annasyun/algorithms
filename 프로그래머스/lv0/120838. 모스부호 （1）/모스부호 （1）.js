function solution(letter) {
    var answer = '';
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
};

    let arr = letter.split(' '); // letter 배열화
    let newArr = []; // 답 넣을 빈배열
    console.log(arr);
    
    arr.map((i)=>{
        for(key in morse){
            if(key===i){
                newArr.push(morse[key]);
            }
        }
    })
    newArr = newArr.join('');
    return newArr;
}