
var arr = [[1, 2, 34], [], { marks: 670, maxMark: 1000 }, 1, 23, 45]

// function definition
function printMarks() {
  var x = 100;
  console.log(arr[2].marks);
  console.log(arr[2]['marks']);
}
// var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// function calling/execution/invoking
printMarks();

function displayWelcomMessage() {
  console.log("Hi Hello welcome to JS world");
}

displayWelcomMessage();

function displayMessage(message) {
  console.log(message);
}

displayMessage('Hi Hello Welcome....');
displayMessage('Hello World How are You ....');
displayMessage('Welcome to JS world');


function sum(num1, num2) {
  var result = num1 + num2;
  return result;
}

console.log(sum(10, 20));

var resulOfSumFunc = sum(10, 20);

// further use only resulOfSumFunc for all the places which has sum(10, 20);
console.log(resulOfSumFunc);



