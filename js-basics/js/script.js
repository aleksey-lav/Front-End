// let a = 10;
//
// let str = 'string';
//
// let boolean = false;
//
// let nullvar = null;
//
// let undefvar;
//
// let obj = {};

// alert('Hello JS');

// console.log(NaN, Infinity);

// console.log('123');

// console.log(Number(false));

// console.log(String(true));

// console.log(Boolean());

// alert('Это алерт');

// let message = prompt('Это промпт','');

// console.log(message);

// let suffer = confirm('ничего не поделаешь, придется страдать');
//
// console.log(suffer);

// console.log(-(2+4)/0);

// console.log(2+'2' === 22);

// console.log(true+'');

// console.log(4-2-'6');
//
// console.log(4*'6');
//
// console.log(6/'2');
//
// console.log(3, typeof 3);
// console.log('string', typeof 'string');
// console.log(true, typeof true);
// console.log(null, typeof null);
// console.log(undefined, typeof undefined);
// console.log(NaN, typeof NaN);
// console.log('object', typeof {});
// // console.log('function',typeof function(){});
//
// if (true) {
// console.log(true);
// } else {
//
// }


// for (let i = 0;i<10;i++) {
//     console.log(i);
// }

// let a = 1;
// while (a<5) {
//     console.log(a);
//     a++;
// }
// do {
//     a++;
//     console.log(a);
// } while (a<5);

// let letter = prompt('Введите букву','');
// alert(letter.charCodeAt(letter));

// let string = prompt('enter phrase', '');
// let result = '';
// for (let i = 0; i < string.length; i++){
//     let newChar = ' ';
//     if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
//
//         let newCharCode = (string.charCodeAt(i) - 65 + 13) % 26 + 65;
//         let newChar = String.fromCharCode(newCharCode);
//     }
//     result += newChar;
// }
// alert(result);


// let str = prompt('enter Mn,Tue,Wed,Th,Fr,Sat or Sun', '');
// switch (str){
//     case 'Mn':
//         alert("This a Monday, bro");
//         break;
//     case 'Tue':
//         alert("This a Tuesday, bro");
//         break;
//     case 'Wed':
//         alert("This a Wednesday, bro");
//         break;
//     case 'Th':
//          alert("This a Thursday, bro");
//         break;
//     case 'Fri':
//         alert('This is a Friday');
//         break;
//     case 'Sat':
//         alert('This a Saturday');
//         break;
//     case 'Sun':
//         alert('This a Sunday');
//         break;
//     default:
//         alert('Input one of them (Mn,Tue,Wed,Th,Fr,Sat or Sun)');
//         str = prompt('enter Mn,Tue,Wed,Th,Fr,Sat or Sun', '');
//         break;
// }


//PALINDROME

// function palindrome(str){
// for (let i = 0; i < str.length; i++) {
//         if (str.charCodeAt(i) != str.charCodeAt((str.length - i - 1)))
//             return false;
//     }
//     return true;
// }

//Обрезание строки

// function truncate(str, length) {
//     if (length < 3){
//         return false;
//     }
//     if (str.length <= length){
//         return str;
//     }
//     else{
//         let res = str.substr(0, length-3);
//         return res + '...';
//     }
// }





function arrayPow(arr) {

    arr.forEach(function (value, index) {
        arr[index] = value ** index;
    });
    return arr;

}





































