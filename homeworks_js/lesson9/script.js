let birthday = prompt("Please enter the day of your birth in «dd.mm.yyyy» format", "");

birthday = birthday.split(".").reverse().join("-");
alert("You are " + Math.floor((new Date() - Date.parse(birthday))/(60000 * 60 * 24 * 365)) + " years old");