let personaldetails={
    firstname :"kiran",
    Lastname :"walekar",
    location :"solpaur",
    Educatio: "B.E"


}
let collegeDetails={
    name : "VIIT",
    Address:" Kondhawa, Pune",
    
}
let mergeoutput = Object.assign({},personaldetails,collegeDetails);
console.table(mergeoutput);
console.log(`-------------------------------------------------------`);
array=["sayali","shruti","sam","jane"];
Object.freeze(array);
for (const iterator of array) {
    console.log(`My friend name ${iterator}`);
}
console.log(`-------------------------------------------------------`);
let str="codemind technology";
console.log(str.length);
for (let index =str.length; index >= 9; index--) {
    const element = str.charAt(index);
    console.log(element);

    
    

    
}