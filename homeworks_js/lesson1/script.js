


function task1() {
    const name = prompt("Your name?", "");
    const age = prompt("Your age?", "");

    if(name == "" || isNaN(age)){
        return task1();
    }
    else{
        if (age < 18) {
            alert("You are not allowed to visit this website");
        }
        else if (age >= 18 && age <= 22) {
            let resultAnswer = confirm("Are you sure you want to continue?");
            if (!resultAnswer) {
                alert("You are not allowed to visit this website");
            }
            else {
                alert("Welcome " + name);
            }
        }
        else if (age > 22){
            alert("Welcome dear " + name);
        }
    }
}
task1();