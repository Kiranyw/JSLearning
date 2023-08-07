let professor={
    name : "XYZ",
    Designation : "Senior Teacher",
    Education: "MTech",
    Subject :"Mechnics",
    Shifttime :"Day",
    degree : {
        engineering : "CSS",
        PHD : "Adv Computiong",
        SCC :"Walchand",
    },
    certificates :["Hacker Rank Participation", "Certificate in IFE course", "Certificate in Adv Programming"],
    teacherdegree : function(){
        console.log(`Teacher degree - ${this.degree.PHD}, ${this.degree.SCC}, ${this.degree.engineering}`);
    }

}
 professor.teacherdegree();
 professor. totalExperience = "14 year";

 
 professor.salary =18000;
 
 professor.certificates.pop="Oracle Certified";
 console.table(professor);
 let lastcertificate= professor.certificates.pop;
 console.log(lastcertificate);
 