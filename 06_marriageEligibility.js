function marriageEligibility (gendername, age){
   
    
    if (gendername=="other") {
        console.log(`Your gender is ${gendername} and age is ${age} and Please enter valid data`);
        return
    }
   
        if (gendername= "male" && age>=21) {
            console.log(`Your gender is ${gendername} and age is ${age} and you are eligible for marriage`);
            return;
        } else {
            console.log(`Your gender is ${gendername} and age is ${age} and you are not eligible for marriage`);
            return;
        }
        if (gendername= "female" && age>=18) {
            console.log(`Your gender is ${gendername} and age is ${age} and you are eligible for marriage`);
            return;
        } else {
            console.log(`Your gender is ${gendername} and age is ${age} and you are not eligible for marriage`);
            return;
        }
        
     }
   


marriageEligibility("male",17);
marriageEligibility("male",25);
marriageEligibility("female",28);
marriageEligibility("other",41);
marriageEligibility("Female",16);
marriageEligibility("other",35);



   


