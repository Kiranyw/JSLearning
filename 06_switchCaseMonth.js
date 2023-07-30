function monthofyear (month) {

    switch (month) {
        case 1:
            console.log(`The month ${month} is January`);
            break;
        case 2:
            console.log(`The month ${month} is Febuary`);
            break;
        case 3:
            console.log(`The month ${month} is March`);
            break;
        case 4:
            console.log(`The month ${month} is April`);
            break;
        case 5:
            console.log(`The month ${month} is May`);
            break;
        case 6:
            console.log(`The month ${month} is June`);
            break;
        case 7:
            console.log(`The month ${month} is July`);
            break; 
        case 8:
            console.log(`The month ${month} is August`);
            break;
        case 9:
            console.log(`The month ${month} is September`);
            break;
        case 10:
            console.log(`The month ${month} is October`);
            break;
        case 11:
            console.log(`The month ${month} is November`);
            break;
        case 12:
            console.log(`The month ${month} is December`);
            break;   

         
    
        default:
            console.log(`Given input ${month} - Invalid input`);
            break;
    }
}
monthofyear(0);
monthofyear(2);
monthofyear(5);
monthofyear(12);
monthofyear(15);
monthofyear(100);
monthofyear(null);
monthofyear(undefined);