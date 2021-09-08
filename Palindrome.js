const isPalindrome = (num) => {
   let factor = 1;
   while (num / factor >= 10){
      factor *= 10;
   }
   while (num) {
      let first = Math.floor(num / factor);
      let last = num % 10;
      if (first != last){
         return false;
      }
      num = Math.floor((num % factor) / 10);
      factor = factor / 100;
   }
   return true;
};
console.log(isPalindrome(123241));
console.log(isPalindrome(12321));
console.log(isPalindrome(145232541));
console.log(isPalindrome(1231));