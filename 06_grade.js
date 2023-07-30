function gradeCalculation(marks) {
  var givenmarks = +marks;
  if (givenmarks <= 0 || givenmarks > 100 || isNaN(givenmarks)) {
    console.log(`Please provide the valid marks`);
  }


  if (givenmarks >= 90 && givenmarks <= 100) {
    console.log(`Funtastic marks : ${marks}, Your grade is A+`);
  }
  if (givenmarks >= 75 && givenmarks < 90) {
    console.log(`Excellent marks ${marks}, your grade is A`);
  }
  if (givenmarks >= 50 && givenmarks < 75) {
    console.log(`Good marks ${marks}, your grade is B`);
  }
  if (givenmarks >= 35 && givenmarks < 50) {
    console.log(`Marks is ${marks}, your grade is C, Need improvement`);
  }

 
}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation("Eighty");
gradeCalculation(29);
gradeCalculation(91);
gradeCalculation(150);
gradeCalculation(undefined);
gradeCalculation(null);


