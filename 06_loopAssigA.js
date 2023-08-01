

function vowelCount(str){

    let count = 0;

    for (let index = 0; index < str.length; index++) {

        let char = str.charAt(index);

        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 

            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {

            console.log(char); 

            count = count + 1;

        }

    }

    console.log(`Total number of vowels is: ${count}`);

}
vowelCount("I am very good IT developer")
console.log(`-------------------------------part 2---------------------------------------------`);
function sum(){
    let cubeSum = 0;
    for (let index = 1; index <=5; index++){
        
        cube = index * index * index;
        
        cubeSum = cubeSum + cube;
       
    }
    console.log(`Sum of cube from 1 to 5 numbers is : ${cubeSum}`);
}
sum();
console.log(`-------------------------------part 3---------------------------------------------`);
function oddPositionedChars(line){

    for (let index = 0; index < line.length; index++) {

         const char = line.charAt(index);

        if (index%2!=0 && char!=" ") {

         
         console.log( `${char}`); 
        }
       
    }
}
oddPositionedChars("Hard work always pay back");
oddPositionedChars("Soon i will be Angular IT Champ")