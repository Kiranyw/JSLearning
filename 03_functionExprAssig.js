var squ = function( num1 ){
    var result= num1 * num1;
    console.log(`Square of ${num1} is ${result}`);
}
squ(5);
squ(6);
squ(25);
squ(100);
squ(89);
squ(59);
console.log('--------------------------Step 2-----------------------------------');
console.log(`Type of function is ${typeof squ}`);
console.log('--------------------------Step 3-----------------------------------');
var rect = function( len, width){
    var result= len*width;
    console.log(`The area of rectangle ${ result}`);
}
rect(499,917);
console.log('--------------------------Step 4-----------------------------------');
var swap = function(num1,num2){

    console.log(`before swapping values are ${num1}, ${num2}`);
    var temp= num1;
    num1=num2;
    num2=temp;
    console.log(`After swapping values are ${num1},${num2}`);
}
swap(55,77);
swap('mahi','raina');
console.log('--------------------------Step 5-----------------------------------');
function string (data1) {
    console.log(`The Given string is '${data1}'`);
    console.log(`Total Charcter available in the string is ${data1.length}`);
    var char6 = data1.charAt(6);
    console.log(` Charachter at index 6 is ${char6}`);
    var char11 = data1.charAt(11);
    console.log(`Character at index 11 is ${char11}`);
    var lastch= data1.charAt(39);
    console.log(`last character of string is ${ lastch}`);
    var firstch= data1.charAt(0);
    console.log(`last character of string is ${ firstch}`);
    var lastch3= data1.charAt(38);
    console.log(`last character of string is ${ lastch3}`);
    var space= data1.split(' ');
    var words= space.length;
    console.log(`The number of words in given string ${words}`);
    var squ = words * words;
    console.log(`Square of no of words is ${squ}`);


    
}
string('JS the most popular language of internet')