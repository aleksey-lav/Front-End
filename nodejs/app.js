// let date = new Date;
//
// console.log(`today is ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`);
// console.log(`time is ${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`);

let date = new Date,
    currentDate = require('./current-date');

console.log(currentDate.showDate(date));
console.log(currentDate.showTime(date));

const Square = require('./square-circle');



const square1 = new Square(2);

console.log(square1.getSquare());
console.log("\n");
const fs = require('fs');
// fs.readFile('./index.html', 'utf-8', function (err, data) {
//     console.log(data);
// });
// fs.writeFile('./index.html', 'blalala', function (err, data) {
//     console.log('write success');
// });
// fs.appendFile('./test.js', '\n1234', function (err) {
//     console.log('append successful');
// });
// fs.open('./testik.js', 'w', function (err, file) {
//     console.log(file);
// });


