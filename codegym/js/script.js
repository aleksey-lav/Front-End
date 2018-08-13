//
// function fizzBuzz () {
//
//     let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 25, 99, 30];
//
//     for (let i = 0; i <= mas.length; i++) {
//
//         if (mas[i] % 3 == 0 && mas[i] % 5 == 0) {
//             mas[i] = "FizzBuzz";
//         }
//         if (mas[i] % 3 == 0) {
//             mas[i] = "Fizz";
//         }
//         if (mas[i] % 5 == 0) {
//             mas[i] = "Buzz";
//         }
//     }
//
//     console.log(mas);
// }
//
// fizzBuzz();


//
// function addNumbers(numA, numB) {
//
//     if(isNaN(numB) || isNaN(numA)){
//         return false;
//     }
//
//     return +numA + +numB;
//
// }

function randomDice() {

    Math.round((Math.random() * 5 + 1));
}