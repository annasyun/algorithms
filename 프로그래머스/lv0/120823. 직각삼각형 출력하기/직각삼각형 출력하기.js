const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
        let 별 ='';
        for(let i=1;i<=input[0];i++){
            for(let j=1;j<=i;j++){
            별+='*'
        }
            별+='\n'
    }
    console.log(별);
});