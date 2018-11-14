//var => function
// let => block

// const => block (nem megváltoztatható) 


/*
function sayHello()
 {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
}
sayHello();

*//* code1
const person = {
    name: 'Mosh',
    walk() {},
    talk() {}
};

person.talk();
person.name = '';

const targetMember = 'name';
person['name'] = 'John';

*//* code2
const person = {
    name: 'Mosh',
    walk() {
        console.log(this)
    }
};

person.walk();

const walk = person.walk.bind(person);
walk();

*//* code 3
const square = function(number) {
    return number * number
}

*//* code 4
const square = number => number * number;
console.log(square(5));

*//* code 5
const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { is: 3, isActive: false },
];

jobs.filter(function(job) { return job.isActive; })
jobs.filter(job => job.isActive);
*/