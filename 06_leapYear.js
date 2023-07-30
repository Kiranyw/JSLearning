function leapyear(year){
    var givenyear = +year;
    if (isNaN(givenyear) || typeof(givenyear)=='string') {
        console.log(`Given year is ${year} and this is Invalid data`);
        return;
    }
  
    if (givenyear%4==0 ) {
        console.log(`Given year is ${year} and this is leap year`);
    } else {
        console.log(`Given year is ${year} and this is not leap year`);
        }
}
leapyear(2020);
leapyear(1996);
leapyear(1600);
leapyear(2023);
leapyear(NaN);
leapyear(2022);
leapyear(null);

leapyear(1945);

leapyear("Twenty Twenty");


leapyear(1750);
leapyear(undefined)


