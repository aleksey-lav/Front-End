let matrix = [];
let flag = true;
let rows = document.getElementsByClassName("row");
for (let i=0; i<rows.length; i++){
    let row = [];
    for (let j = 0; j < rows[i].children.length; j++){
        row.push(rows[i].children[j])
    }
    matrix.push(row);
}
console.log(matrix);

function changeFlag() {
    flag = !flag;
}
function winConditions(elem) {
    console.log(checkRow(elem));
    console.log(checkCol(elem));

}
function checkRow(elem) {
    let row = elem.parentElement;

    return [].every.call(row.children, function (item) {
        return item.innerHTML == elem.innerHTML;
    });
}
function checkCol(elem) {
    let colNum = [].indexOf.call(elem.parentElement.children, elem);
    return matrix.every(function(item){
        return item[colNum].innerHTML == elem.innerHTML;
    });
}
function checkDiag() {
    if(matrix[1][1]){
        return matrix.every(function (item, index, matrix) {
            return matrix[index][index].innerHTML == matrix[1][1].innerHTML;
        }) || matrix.every(function (item, item, matrix) {
            return matrix[1][1].innerHTML == matrix[index][2-index].innerHTML;
        })
    }
    else{
        return false;
    }

}
document.addEventListener('click', function(e){
    if(e.target.classList.contains('cell') && !e.target.innerHTML) {
        console.log(e.target.classList);
        e.target.innerHTML = flag ? 'X' : 'O';
       if(winConditions(e.target)) {
           alert(`the winner is ${flag ? 'X' : 'O'}`);
       }
       else {
           changeFlag();
       }
    }
})