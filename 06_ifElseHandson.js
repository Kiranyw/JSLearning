function numbers(num) {
    if (num%2==0) {
        console.log(`The given number is ${num} and is even`);
    } else {
        console.log(`The given number is ${num} and is odd`);
    }
    
}

numbers(45);
numbers(70);
numbers(67);
numbers(98);

console.log('---------------------------------------------------------------------');

function strng(sent){
    var sentence= sent;
    var sentlenght=sentence.length;
    if (sentlenght>10) {
        console.log(`Given string is ${sentence} `);
        console.log(`Given string contain ${sentlenght} which is more than 10`);
    }
    
}
strng("JavaScript-ES6")
console.log('--------------------------------------------------------------------');

function start(sent1){
    if (sent1="Java") {
        console.log(`Given string start with 'Java'`);
    }
    
}
start("Javascript language")