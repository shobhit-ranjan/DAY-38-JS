var head , tail; 
let HeadCount = 0;
let TailCount = 0;
while(HeadCount < 11 && TailCount < 11){
    let randomNum = Math.floor(Math.random() * 10) % 2;
    if(randomNum == 1){
        HeadCount ++;
    }
    else{
        TailCount ++;
    }
}
if(HeadCount == 11){
    console.log("Head Won This Time !");
}
else{
    console.log("Tails Won This Time !");
}