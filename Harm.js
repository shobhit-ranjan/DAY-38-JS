const prompt = require('prompt-sync')();
let num = prompt('Enter Harmonic Number : ');
console.log(`${num}`);

let value = 0;
if(num != 0) {
    
    for(let i= 1; i<= num; i++) {
    
        value = value + (1/i);
    }
    console.log(" sum is "   + value);
}
else {
    console.log("Wronh input");
}