// 5! = 1 * 2 * 3 * 4 * 5

let result = 1; // 3 
for (let index = 1; index <= 5; index++) {
    result = result * index;
}
console.log(`Factorial of 5 is ${result}`);


let final=1;

function factorial(num) {
   if (num==1) {
    return 1;
   }
   else{
   return num * factorial(num-1);
        
    }
   }


let fact = factorial(5);
console.log(`Factorial using recursion is ${fact}`);
let facct = factorial(9);
console.log(`Factorial using recursion is ${facct}`);
let fact2 = factorial(11);
console.log(`Factorial using recursion is ${fact2}`);
let fact3 = factorial(7);
console.log(`Factorial using recursion is ${fact3}`);
