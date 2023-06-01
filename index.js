const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
}
const personThree = {    
    name: {
        first: '',
        last: ''
    },
    age: 0,
    location: {
        city: '',
        state: '',
        zip: 0
    }
    }

//task1
function moveLocation(person, newLocation) {
    person.location = newLocation;
    if (person == personOne) {
        personTwo.location = newLocation;
        personThree.location = newLocation;
    }
    if (person == personTwo) {
        personOne.location = newLocation;
        personThree.location = newLocation;
    }
}
const nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
}

console.log("Log personTwo");
console.log(personTwo);

moveLocation(personTwo, nLoc);
console.log("Log moved personTwo");
console.log(personTwo);

//task2
const nLoc2 = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
}

moveLocation(personOne, nLoc2);
console.log(personOne);
console.log(personTwo);

//task3

personThree.name.first = 'Jimmy';
personThree.name.last = personOne.name.last + '-' + personTwo.name.last;
personThree.age = 0;
personThree.location = personOne.location;

console.log(personThree);

const nLoc3 = {
    city: 'TEST MOVE WITH BABY',
    state: 'BABY',
    zip: 90210
}

moveLocation(personOne, nLoc3);
console.log(personThree);
console.log(personOne);

//task4
const nLoc4 = {
    city: 'Dontmovewithbaby',
    state: 'NOBABY',
    zip: 00000
}
personOne.age += 20;
personTwo.age += 20;
personThree.age += 20;
const p3Loc = personOne.location;
personThree.location = p3Loc;
moveLocation(personThree, nLoc4);

console.log(personThree);
console.log(personOne);
console.log(personTwo);

//task5
console.log("Welcome to the future!");

personOne.age += 300;
personTwo.age += 300;
personThree.age += 300;

function clonePerson(person){
    let clonedDeepCopy = JSON.parse(JSON.stringify(person));
    clonedDeepCopy.age = 0;
    return clonedDeepCopy;
}

console.log(clonePerson(personThree));

let clonedOne = clonePerson(personOne);
let clonedTwo = clonePerson(personTwo);

moveLocation(clonedTwo, nLoc);
moveLocation(clonedOne, nLoc2);

console.log(personOne.location);
console.log(clonedOne.location);
console.log(personTwo.location);
console.log(clonedTwo.location);

console.log(personOne.age);
console.log(clonedOne.age);
console.log(personTwo.age);
console.log(clonedTwo.age);

//task6

const thoughts = {
    thought1: 'this is a though',
    thought2: 'this is another thought'
}

personOne.thoughts = thoughts;
personTwo.thoughts = thoughts;
personThree.thoughts = thoughts;
clonedOne.thoughts =thoughts;
clonedTwo.thoughts =thoughts;

console.log(personOne.thoughts);

thoughts.thought3 = "testing123";

console.log(personOne.thoughts);

thoughts.though4 = "is this still working?"

console.log(personTwo.thoughts);
