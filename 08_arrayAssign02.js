const arrayNumbers =[20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);
console.log(`-------------------------------------`);
console.log(`The total element in given array is ${arrayNumbers.length}`);
console.log(`-------------------------------------`);
let firstele = arrayNumbers[0];
console.log(`First element is ${firstele}`);
let lastele = arrayNumbers[10];
console.log(`Last element is ${lastele}`);
console.log(`-------------------------------------`);
for (let index = 0; index <=11; index++) {
     let element = arrayNumbers[index];
     if (element%2==0) {
        console.log(`Even numbers are ${element}`);
     }
    
}
console.log(`-------------------------------------`);
for (let index = 0; index <=10; index++) {
    let element = arrayNumbers[index];
    if (element%2!=0) {
       console.log(`Odd numbers are ${element}`);
      
    }
   
}
console.log(`-------------------------------------`);

for (let index = 0; index <=11; index++) {
     let evevnplace= index;
     if (evevnplace%2==0) {
        console.log(`Even positioned elements are ${arrayNumbers[index]}`);
     }
    
}
console.log(`-------------------------------------`);
for (let index = 0; index <=10; index++) {
    let evevnplace= index;
    if (evevnplace%2!=0) {
       console.log(`Odd positioned elements are ${arrayNumbers[index]}`);
    }
   
}
console.log(`-------------------------------------`);
let sum=0;
for (let index = 0; index <=10; index++) {
     let num = arrayNumbers[index];
    sum = sum + num;
    
    
}
console.log(`Addition of all element is ${sum}`);
console.log(`-------------------------------------`);
for (let index = 0; index <=11; index++) {
   let num5= arrayNumbers[index];
   if (num5%5==0) {
    console.log(`The element divided by 5 is ${num5}`);
   }
    
}
console.log(`-------------------------------------`);
let isAvailable = arrayNumbers.includes(115);
console.log(`the number 115 available in array ${isAvailable}`);
let isAvailable2 = arrayNumbers.includes(23);
console.log(`the number 23 available in array ${isAvailable2}`);
console.log(`-------------------------------------`);

arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log(`-------------------------------------`);
arrayNumbers.splice(4,3)
console.log(arrayNumbers);

