
var num = prompt("Input a number", "");
fact(num);
function fact(num) {
    if (num < 0){
        return -1;
    }
    if (num == 0 || num == 1) {
            return 1;
    }
    else {
        return num * fact( num - 1 );
    }
}
var result = fact(num);
document.write(result);