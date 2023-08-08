let banksbi = {
    bankName: "SBI Bank",
    location: "Pune",
    accountNo: 778899,
    ifsc: "SBIC003"
   }
let banklocation= {
    city:"Pune",
    location:"Shivaji Nagar",
    streetname:"JM road",
    pincode:"410003"
}
let bankicice = Object.assign({}, banksbi);
console.log(`-------Output for banckicici after Cloning ${bankicice.bankName}---------------------`);
let bankdetail ={...banklocation}
console.log(`-------Output for banckdetail after Cloning ${banklocation.city}---------------------`);
let rateOfinterest ={
    homeloneinterest: 1,
    personalloneInterest : 2,
    duelInterest : 3
}
let mergeoutput = Object.assign({},bankicice,banklocation,rateOfinterest);
console.log(mergeoutput);

for (const key in mergeoutput) {
     {
        const element = mergeoutput[key];
        console.log(element);
    }
}

