var z; // declaration
z = 100; // initialization/assignment

var z = 100; // declaration & initialization/assignment


z = 99; // re-initialization/assignment


var a = 20;
var b = 30;

// Copy by Value --> primitive type as parameters 
function sampleFunc(x, y) {
  console.log(x, y); // 20, 30
  x = 10;
  y = 100;
  console.log(x, y);
}

sampleFunc(a, b); // sampleFunc(20, 30);

console.log(a, b);




// Copy By Reference ---> Composite Type (array, objects) Using indexes

var arrRef = [1, 2, 3, 4, 5];

// Array
function sampleFuncArr(xArr) {
  console.log(xArr);
  xArr = 'Some Content';
  console.log(xArr);
}

sampleFuncArr(arrRef);

console.log(arrRef);


// Object
var objRef = {
  ebBill: 900,
  tvBill: 1000,
};

function sampleFuncObj(xObj) {
  console.log(xObj);
  xObj['ebBill'] = 'Some Content';
  console.log(xObj);
}

sampleFuncObj(objRef);

console.log(objRef);



