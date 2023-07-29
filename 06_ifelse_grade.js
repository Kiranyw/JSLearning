function voteEligibility(arg){
    var age = arg;
    if (age<=0 || age>130) {
        console.log(`Given Number is ${age} and is invalid input`);
        
    } else {
        if (arg>=18) {
            console.log(`Your age is ${age} and you are eligible for vote`);
        } else {
            console.log(`Your age is ${age} and you are not eligible for vote`);
        }
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility("undefined");
voteEligibility(null);
