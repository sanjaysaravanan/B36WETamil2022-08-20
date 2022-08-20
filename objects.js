const personObj = {
  name: 'Sanjay',
  age: 30,
  age: 45,
  dob: 'yyyy-mm-dd',
  origin: 'asian',
  nationality: "indian",
  skills: ["Singing", "Dancing"],
  bio: {
    height: 188,
    weight: 90,
  }
}

console.log(personObj);
// Accessing Values
// Square bracket way
console.log(personObj["origin"]);

// dot accessing
console.log(personObj.origin);

console.log(personObj['aadhar']);

console.log(personObj.aadhar);

console.log(personObj.skills);
console.log(personObj.bio.height)

var arr = [[1, 2, 34], [], { marks: 670, maxMark: 1000 }, 1, 23, 45]

arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


console.log(arr);


var arr = [[1, 2, 34], [], { marks: 670, maxMark: 1000 }, 1, 23, 45]

// var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(arr[2].marks);
console.log(arr[2]['marks']);

// Iteration of Objects
// Output name --> Sanjay .....

for (var key in personObj) {
  console.log(key + ' ----> ' + personObj[key]);
}

const students = [
  { name: "Sam", age: 14 },
  { name: "Danny", age: 15 },
]
// Iteration of Objects
// Output name --> Sanjay .....
// for in
for (var x in personObj) {
  console.log(x + ' ----> ' + personObj[x]);
}

// Object.keys ---> O capital
// console.log(Object.keys(personObj));

for (var key of Object.keys(personObj)) {
  console.log(key + ' ---> ' + personObj[key]);
}

console.log(Object.values(personObj));
