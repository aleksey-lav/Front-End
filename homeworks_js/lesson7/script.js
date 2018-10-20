const users = [{
  name: "Ivan",
  surname: "Ivanov",
  gender: "male",
  age: 30
},
{
    name: "Anna",
    surname: "Ivanova",
    gender: "female",
    age: 22
},
  {
    name: "Joseph",
    surname: "Fieldy",
    gender: "male",
    age: 45
  }];


let excluded = [
    {
        name: "Anna",
        surname: "Petrova",
        gender: "female",
        age: 30
    },
    {
        name: "Pavel",
        surname: "Vodkin",
        gender: "male",
        age: 45
    }];

function excludedBy(users, excluded, name){
  let resultArr = [];
  for (let key of users) {
    let merge = excluded.some(function(employee){
      return key[name] === employee[name];
    });
    if (!merge) resultArr.push(key);
  }
  return resultArr;

}
console.log(excludedBy(users, excluded, 'name'));
