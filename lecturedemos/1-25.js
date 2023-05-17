"use strict";


let people = [
    { name: "Zachary", age: 31 },
    { name: "Brittany", age: 35 },
    { name: "Jason", age: 36 },
    { name: "Natalie", age: 37 },
    { name: "Jennifer", age: 38 }
];
let somePeople = people.filter(p => p.age >= 36);
// in the code above, p is a variable that represents a 
// value in the array people; it is used in the comparison 
// as the find function looks at each value in the array
for (let i = 0; i < somePeople.length; i++) {
    console.log(somePeople[i].name);
}

