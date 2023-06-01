const personOne = {
  name: {
    first: "Timmy",
    last: "Timtim",
  },
  age: 30,
  location: {
    city: "New York",
    state: "New York",
    zip: 10001,
  },
};

const personTwo = {
  name: {
    first: "Julie",
    last: "July",
  },
  age: 28,
  location: {
    city: "Albany",
    state: "New York",
    zip: 12201,
  },
};

function linkTwoObjectLocationByReference(obj, obj2, location) {
    obj.location = location;
    obj2.location = location;
}

//task1
function moveLocation(person, newLocation) {
    for(const key in person.location){
        person.location[key] = newLocation[key];
    }
}

const nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
}

moveLocation(personTwo, nLoc);

console.log("Location moved");
console.log(personTwo.location.city);


//task2
linkTwoObjectLocationByReference(personOne, personTwo, nLoc);

console.log("PersonOne and PersonTwo linked on nLoc");
console.log(personOne);
console.log(personTwo);

const nLoc2 = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
}

console.log("Move PersonOne after linked");
moveLocation(personOne, nLoc2);

console.log(personOne);
console.log(personTwo);

//task3
console.log("creating person3");
const personThree = {
    name: {
        first: "",
        last: "",
    },
    age: 0,
    location: {
        city: "",
        state: "",
        zip: 0
    },
}

personThree.name.first = 'Jimmy';
personThree.name.last = personOne.name.last + '-' + personTwo.name.last;
personThree.age = 0;
console.log("link person3 to persontwo by reference on nLoc");
linkTwoObjectLocationByReference(personThree, personTwo, nLoc);
console.log(personThree);

console.log("move personOne to nLoc3");
const nLoc3 = {
    city: 'Shady Shores',
    state: 'Hawaii',
    zip: 55555
}

moveLocation(personOne, nLoc3)

console.log("log all three people after move");
console.log(personOne);
console.log(personTwo);
console.log(personThree);

//task 4
console.log("increment all ages by 20");
personOne.age += 20;
personTwo.age += 20;
personThree.age += 20;

console.log("create copy of personThree location and set location = to that");

let locDeepCopy = JSON.parse(JSON.stringify(personThree.location));
personThree.location = locDeepCopy;

const nLoc4 = {
    city: 'Cityville',
    state: 'Stateville',
    zip: 33333
}

console.log("move location of PersonThree");
moveLocation(personThree, nLoc4)
console.log(personThree);
console.log(personTwo);

//task5
console.log("Welcome to the future!");
console.log("increment all ages by +300");
personOne.age += 300;
personTwo.age += 300;
personThree.age += 300;

function clonePerson(person){
    let clonedPerson = JSON.parse(JSON.stringify(person));
    clonedPerson.age = 0;
    return clonedPerson;
}

console.log("Clone Persons 1 & 2");
const clonedPersonOne = clonePerson(personOne);
const clonedPersonTwo = clonePerson(personTwo);

console.log(clonedPersonOne);
console.log(clonedPersonTwo);

console.log("Move clone location");
const nLoc5 = {
    city: 'PLACE',
    state: 'WHERE',
    zip: 888888
}
moveLocation(clonedPersonOne, nLoc4);
moveLocation(clonedPersonTwo, nLoc5);
console.log(clonedPersonOne);
console.log(clonedPersonTwo);


//task 6

const thoughts = {
    thought1: 'this is a though',
    thought2: 'this is another thought'
}

personOne.thoughts = thoughts;
personTwo.thoughts = thoughts;
personThree.thoughts = thoughts;
clonedPersonOne.thoughts =thoughts;
clonedPersonTwo.thoughts =thoughts;

console.log(personOne.thoughts);

thoughts.thought3 = "testing123";

console.log(personOne.thoughts);

thoughts.though4 = "is this still working?"

console.log(personTwo.thoughts);