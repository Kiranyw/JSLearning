console.log('-------------Function with no arguments and no return-------------------');
function display(){
    console.log('Today is raining day');
    console.log('Carry your umbrella');
}
display();

console.log('-------------------Function with arguments and no return----------------');
function personalDetails(value){
    console.log('First name is', value);
}
personalDetails("Kiran");

function lastName(value2){
    console.log('Last Name is',value2);
}
lastName("Walekar");
function clgName(value3){
    console.log('College Name is',value3);
    }
 clgName("VIIT");  

 console.log('--------------- Swap Value-function with arg and no return------------------');

 function couple(person1,person2){
    console.log('before swap','Value 1=',person1,'Value 2=',person2);
    temp = person1;
    person1=person2;
    person2=temp;
    console.log('After swap','Value 1 =', person1,'Value 2',person2);

 }
 couple("Virat","Anushka");

 function numbers(num1,num2){
    console.log('Before swap','Value 1=',num1,'Value 2',num2);
    temp = num1;
    num1= num2;
    num2=temp;
    console.log('After swap','Value 1=',num1,'value 2=',num2);


 }
 numbers(1000,2000);

 console.log("-------------------------Function with argument and return value-----------------");
 function addition(no1, no2, no3){
    console.log('Value are',no1,no2,no3);
    var result= no1 + no2 + no3;
    return result;
    
 }
var add = addition(10.33, 600, 40);
console.log( 'Result is', add);
var add = addition('hello', 'good', 'morning')
console.log('Result is',add);
console.log("------------------------------Bank Detail----------------------------------------");
function bank( data1, data2, data3, data4){
    console.log('Bank name is',data1,'bank Account Number',data2,'Location is',data3,'Pin COde-',data4);
}
bank('CITI',3456782345,'Pune',431202);
bank('Axis',7856782345,'Mumbai',441202);
bank('HDFC',8956722345,'Pune',631202);