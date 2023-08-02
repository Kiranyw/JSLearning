const arrayFruits =["Banana","Orange","Apple","Mango","WaterMelon"]
console.log(`Given array is ${arrayFruits}`);
console.log(`---------------------------------------------------`);
console.log(`length of given array is ${arrayFruits.length}`);
let firstelement = arrayFruits[0];
console.log(`First element is ${firstelement}`);
console.log(`---------------------------------------------------`);

let lastelement = arrayFruits[arrayFruits.length-1];
console.log(`Last element is ${lastelement} `);
console.log(`---------------------------------------------------`);
arrayFruits.unshift("Papaya");
console.log(arrayFruits);
console.log(`---------------------------------------------------`);
arrayFruits.splice(4,1);
console.log(arrayFruits);
console.log(`---------------------------------------------------`);
arrayFruits.push("Pineapple");
console.log(arrayFruits);
console.log(`---------------------------------------------------`);
arrayFruits.splice(4,0,"Dragon fruit");
console.log(arrayFruits);
console.log(`---------------------------------------------------`);
arrayFruits.splice(2,1,"Kiwi");
console.log(arrayFruits);
console.log(`---------------------------------------------------`);
let removed = arrayFruits.splice(1,4);
console.log(removed);
console.log(`---------------------------------------------------`);

let arraynewlist= ["Banana","Orange","Apple","Mango","WaterMelon"] 
console.log(arraynewlist);
let arraylength= arraynewlist.length;
arraynewlist.splice(arraylength-5,2);
console.log(arraynewlist);

