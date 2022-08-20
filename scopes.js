var x = 100;

// function scope
// function definition
function printMarks() {
  var y = 99;
  console.log(y);
  {
    var z = 99;
  }

}

// printMarks();

// console.log(x);
var ar = [1, 2, 3, 4]

for (var val of ar) {
  {
    var z = 100;
  }
}


console.log(x);
console.log(z);

