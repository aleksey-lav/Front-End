let arr = [];

let fruits = document.getElementsByClassName("row");

for (let i = 0; i < fruits.length; i++){
    let obj = {};
    obj.name = fruits[i].children[0].innerHTML;
    obj.price = fruits[i].children[1].innerHTML;
    obj.amount = fruits[i].children[2].innerHTML;

    arr[i] = obj;
}

console.log(arr);

let element = document.getElementById('input');

element.onkeyup = function () {
    console.log(element.value);
    for (let i =0; i < arr.length; i++){
        if(~arr[i].name.toLowerCase().indexOf(element.value.toLowerCase())){
            fruits[i].style.display = "";
        } else {
            fruits[i].style.display="none";
        }
    }

}