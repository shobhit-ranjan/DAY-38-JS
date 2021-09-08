const prompt = require('prompt-sync')();
const month = prompt('Enter Your Month: ');
const date = prompt('Enter Your Date: ');


if((month < 6)  &&  (month > 4)  &&  (date <= 20)){
    console.log("Right Date");
}
else{
    console.log("Not in valid date");
}