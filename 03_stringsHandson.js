console.log(`----------------------------Step1----------------------------`);
function stringBasics(){

    console.log('My Dream Company is XYZ');
}
stringBasics();
console.log('-------------------------step 2 ---------------------------------');
function hobby(hb1, hb2,hb3) {

    console.log('My first hobby is',hb1,'My Second hobby is',hb2,'My Third hobby is',hb3);
}
hobby('painting','Reading','sketching');

console.log('-----------------------------Assignment2------------------------------');
var greet="     Hey you are doing good, keep it up       "
console.log('Given string is',greet);
console.log('-----------------------------------------------------------');
var lenghtgreet=greet.length;
console.log(`Length of string is ${lenghtgreet}`);
console.log('-----------------------------------------------------------');

var greet="     Hey you are doing good, keep it up       "
var assign3=greet.trim();
console.log(assign3);

console.log(`Before trim string length ${lenghtgreet} After trim sentence-" ${assign3}" Length after trim ${assign3.length} `);
console.log('-----------------------------------------------------------');

var spaces= assign3.length - lenghtgreet;
console.log(`The total Number of extra spaces removed ${spaces}`);

console.log('-----------------------------------------------------------');
var charAt0=assign3.charAt(0);
var charAt33=assign3.charAt(33);
console.log(`After trim first character is ${charAt0} and last charcter is ${charAt33} `);
console.log('-----------------------------------------------------------');
var assign4= assign3.split(' ');
var word= assign4.length;
console.log(assign3);
console.log(`The numbers of words are ${word}`);
console.log('-----------------------------------------------------------');
var assign5= assign3.indexOf('good');
console.log(`The index of the word'good' is ${assign5}`);
console.log('-----------------------------------------------------------');
var assign6=assign3.includes('Hey');
console.log(`Is String strat with 'Hey'- ${assign6}`);
console.log('----------------------------------------------------------');
var assign7=assign3.includes('up');
console.log(`Is string end with "up" ${assign7}`);
console.log('----------------------------------------------------------');
var assign8=assign3.slice(22, 34);
console.log (`substring starting from index 22 is: ${assign8}`);





