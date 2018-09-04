'use strict';

var user = {
    name: "Freddy",
    age: 12
};
toClone(user);

function toClone(myOject) {
    var clone = {};
    for(var key in myOject){
        clone[key] = myOject[key];
    }
    console.log(myOject);
    console.log(clone);
    clone.age = "40";
    clone.name = "Aleksey"
    console.log(clone);
    console.log(myOject.name);

}


