// Given two numbers. Return sum of all numbers, that lay between these two numbers. For example sumRange(1,5) should return 1+2+3+4+5=15
//
// function sumRange(from, to){
//     let sum = 0;
//     from = 5;
//     to =1;
//     if(from > to){
//         let temp = from;
//         from = to;
//         to = temp;
//     }
//    while(from <= to){
//         sum += from;
//         from++;
//     }
//    console.log(sum);
// }
// sumRange();


// Given a temparature and two temperature scales - you need to convert temperature from one scale to another. Supported scales - Celsius(C), Fahrenheit(F) and Kelvium(K).

// function tempConverter(deg, scale1, scale2){
//
//     deg = 32;
//     scale1 = (deg * 1,8) + 32 ;
//     scale2 = deg + 273.15;
//
// console.log(scale1 + "F", scale2 + "K");
//
// }
// tempConverter();

/*
function randomDice() {

    return Math.floor(Math.random() * 6) + 1;
}
*/

//
// function isNatural(n) {
//
//
// return n.isInteger();
//
// }



function sumNumbers(arr){
    let sum = 0;
   for (let i = 0; i < arr.length; i++){
    let toNumber = parseInt(arr[i]);
  if (!isNaN(toNumber)) {
      sum += toNumber;
  }
   }
    return sum;
}


































