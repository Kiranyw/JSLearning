class Vehicles{
    constructor(companyname, model, speed, type, tyre)
    {
    this.companyname = companyname;
    this.model= model;
    this.speed= speed;
    this.type=type;
    this.tyre = tyre;

    }
    show(){
        console.log(`Vehicle Company Name ${this.companyname}, Model name ${this.model}, Speed ${this.speed}, Type ${this.type}, Tyre used ${this.tyre}`);
    }
}
   
    

const Activa = new Vehicles("Honda", "Activa 6G", "60kmph", "Moped", "MRF");

const Wego = new Vehicles("TVS","Wego","62kmph","Moped","CEAT")

const Jupitor = new Vehicles("TVS","Jupitor","50kmph","Moped","Apollo")

const Dio = new Vehicles("Honda","Dio","60kmph","Moped","Bridgestone")

const ola = new Vehicles("Ola","S1 Pro","116kmph","Moped","MRF")


const arrayofvehicle=[Activa,Wego,Jupitor,Dio,ola];
for (const Vehicles of arrayofvehicle) {
    Vehicles.show();
}
console.log(`-----------------------------------------------------------------------------------------------`);
class College{
    constructor(Name, Address, Education, Intake){
        this.Name = Name;
        this.Address = Address;
        this.Education = Education;
        this.Intake = Intake;
    }
    show(){
        console.log(`College Name ${this.Name}, Address ${this.Address},Education ${this.Education}, Intake for course is ${this.Intake}`);
    }
}
const cope= new College("COEP","Shivaji Nagar pune","Engineering", 250);
const VIIT= new College("VIIT","Kondhawa pune","Engineering", 200);
const PICT= new College("PICT","Katraj pune","Engineering", 150);
const AISSMS= new College("AISSMS","Shivaji Nagar pune","Engineering", 250);

cope.show();
VIIT.show();
PICT.show();
AISSMS.show();


 
