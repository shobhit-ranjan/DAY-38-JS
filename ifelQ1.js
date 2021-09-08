var arr =[];
for(i=0;i<5;i++)
{
    var randome = Math.floor( Math.random() * 100 + 100); 
      arr.push(randome);
}

var newarr = arr.sort();
console.log(newarr);

console.log("min is " +newarr[0]);
console.log("max is " +newarr[4]);