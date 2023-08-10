let jsonemployeeinfo = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role" :["Dev","DBA"],
    "age": 23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
        "street":"32, Laham st.",
        "city": "Innsbruck",
        "country":"Austria"
    } ,
    "referred-by":"E0012"


}`

const employee = JSON.parse(jsonemployeeinfo);
console.log(employee);

const array = employee.role;
for (const role of array) {
    if (role=='Dev') {
        console.log(`Role of employee is ${role}`);
        
    }
    
}

let empname = employee.name;
let lastname = empname.split(' ');
console.log(lastname);

let emplength = lastname[lastname.length-1];
console.log(emplength);

let dateofjoin = employee.doj;
let finaljoin = dateofjoin.split("-");
console.log(finaljoin);

let joining = finaljoin[finaljoin.length-1]
console.log(joining);


