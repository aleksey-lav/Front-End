
function simpleNumber() {
    let number1 = prompt("Enter simple Integer number which > 1: ", "");
    let number2 = prompt("Enter second simple number", "");
    if(number1 < 1 || number2 < 1){
        simpleNumber();
    }
    else   {
        for(let i = number1; i <= number2; i++){

            let isSimple = true;

            for(let j = 2; j <= i-1; j++){
                if(i % j === 0){
                    isSimple = false;
                    break;
                }
            }
            if(isSimple === true){
                console.log(i);
            }
        }
    }
}
simpleNumber();

