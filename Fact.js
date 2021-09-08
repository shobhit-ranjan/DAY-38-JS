const prompt = require('prompt-sync')();
let num = prompt('Enter the num to find the fact: ');
let f=1
for( i = 2; i <= num; i++ ){
    f = f * i;
}
console.log('Factorial  of ' + num + ' is ' + f);