let sbiBank= {
    bankName: "SBI",
    location:"Pune", 
    accountNo : 2255666677,
    ifsc: "SBI7755IP",
    interestRate:"1.2%",
    showDetail : function(){
        console.log(`All Details- ${this.bankName}, ${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);

    }

}
sbiBank.showDetail();
let axisBank= {
    bankName: " Axis",
    location:"Nashik", 
    accountNo : 2465666677,
    ifsc: "Axis7755IP",
    interestRate:"1.2%",
    showDetail : function(){
        console.log(`All Details- ${this.bankName}, ${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);

    }

}
axisBank.showDetail();
let hdfcBank= {
    bankName: " HDFC",
    location:"Sangali", 
    accountNo : 2465886677,
    ifsc: "HDFC7755IP",
    interestRate:"1.3%",
    showDetail : function(){
        console.log(`All Details- ${this.bankName}, ${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);

    }

}
hdfcBank.showDetail();