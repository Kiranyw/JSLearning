const arrayNumbers = [1,-7, 40, 502, -77, 91, 0, 108, 89, -601]

arrayNumbers.forEach((value) => {
    console.log(`Array Element ${value}, Index is : ${arrayNumbers.indexOf(value)}`);
});


console.log(`----------------------------------------------------------------------`);

arrayNumbers.forEach((value) => {
    if (value>0) {
        console.log(`Positive numbers are ${value}`);
    }
    
});
console.log(`----------------------------------------------------------------------`);
let negativearray=[];
arrayNumbers.forEach((value) => {
    if (value<0) {
       negativearray.push(value);
       
    
    }
   
});
console.log(`Negative Numbers`);
console.log(negativearray);
console.log(`----------------------------------------------------------------------`);

arrayNumbers.forEach( (value)=>{
 if (value%2==0) {
     console.log(`Even No. ${value}`);
   }
} );
console.log(`----------------------------------------------------------------------`);

let sum=0;
arrayNumbers.forEach((value) => {
    sum = sum + value;
});
console.log(`Sum of all no is ${sum}`);
console.log(`----------------------------------------------------------------------`);
arrayNumbers.forEach((value) => {
    if (arrayNumbers.indexOf(value)%2==0) {

        console.log(`Value at even index ${arrayNumbers.indexOf(value)} is ${value}`);
        
    }
    
});

