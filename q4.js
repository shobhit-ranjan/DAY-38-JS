
var arr =[];
for(i=0;i<5;i++)
{
    var randome = Math.floor( Math.random() * 6 ) +1; 
      arr.push(randome);
}
console.log(arr);
const reducer = (accumulator, curr) => accumulator + curr;
console.log(arr.reduce(reducer));

