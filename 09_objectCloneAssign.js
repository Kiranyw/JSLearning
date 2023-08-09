const arrayNums= [20, 3, 4, 56, 90, 400, 49];
let array1 = arrayNums;
array1.push(55,66);
console.log(arrayNums);
console.log(array1);
console.log(`----------------------------------------------------`);
let array2 =[...arrayNums];
arrayNums.push(10,25);
console.log(arrayNums);
console.log(array2);
console.log(`----------------------------------------------------`);
const arrayeven= [2, 30, 14, 8];
let mergednums = [...arrayNums, ...arrayeven];
console.log(mergednums);
console.log(`----------------------------------------------------`);
const employee_info = {
    emp_id : 27,
    emp_name : "jone Doe",
    salary :{ 
        july_month:"40,000 INR",
        aug_month:"50,000 INR",
        jun_month:"65,000 INR",

    },
    address :{
        locality :{
            colony :"Om Vrindavan Society",
            street :"Kanch Pokli, 431202"
        },
        city : "Mumbai",
        state :"Maharashtra",
        country :"India"
    },
    mobiles: ["+91 8600 3456 88","1800-4567 32","+91-9096 5678 77"],
    show(){
        console.log(`Empolyee details - Address -${this.address.locality.colony},${this.address.locality.street},${this.address.city},${this.address.state}, ${this.address.country}`);
        console.log(`Mobile no is ${this.mobiles}`);
    }


}

employee_info.show();
let newemployee = JSON.parse(JSON.stringify(employee_info));
newemployee.salary.july_month="80,000 INR";
employee_info.address.country="United Kingdom";
console.log(`Updated data ${newemployee.salary.july_month}`);
console.log(`Updated data ${employee_info.address.country}`);
