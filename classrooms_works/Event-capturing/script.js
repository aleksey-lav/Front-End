/*
document.getElementsByTagName('button')[0].addEventListener('click', function (e) {
    let div = document.getElementsByTagName('div')[0];
    div.toggleAttribute('hidden');
})*/


function pow(num1, num2) {
    try {
        if(!(typeof num1 == "number") || !(typeof num2 == "number")){
            throw new TypeError("numbers required")
        }
        if(num1 <= 0 || num2 <= 0){
            throw new SyntaxError("only positive numbers")
        }
    }
    catch(e){
        if(e instanceof TypeError){
            console.log(`${e.name}: ${e.message}`)
        }
        if (e instanceof SyntaxError){
            console.log((`${e.name}: ${e.message}`))
        }
    }

}
