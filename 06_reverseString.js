function reverseString(line){

    for (let index = line.length-1; index>=0 ; index--) {
        let char = line.charAt(index);
       
        if (char!=" ") {
         console.log(char);
        }
  
    }
}
reverseString("Hard work always pays back");
reverseString("Soon i will be Angular IT Champ")
