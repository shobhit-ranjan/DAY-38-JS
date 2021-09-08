const prompt = require('prompt-sync')();
const number = prompt('Enter the num to find the unit of it: ');
console.log(`${number}`);
let num = number.length;
switch(num){
    case 1:
        console.log("Unit");
        break;
    case 2:
        console.log("Ten");
        break;  
    case 3:
        console.log("Hundred");
        break;
    case 4:
        console.log("Thousand");
        break; 
    case 5:
        console.log("TenThousand");
        break;
     case 6:
        console.log("Lakhs");
        break;
    default:
        console.log("wrong input");
} 