// WRITE YOUR FUNCTIONS HERE
function example() {
  return "example";
}

function checkArrayLength(arr) {

}

//DO NOT use for loops on this one!
function double(arr){

}

//Make arr [{name:"Robert", age:43}, {name:"Emma", age:25}, {name:"Josh", age: 29}]
//into: [{"Robert":43}, {"Emma":25}, {"Josh":29}];
function messWithArray (arr) {

}

function getTitleFromDom() {

}

//just the heading, paragraph and image
function checkTheElementsOnTheDom() {

}

// Write the test for this function below
function divideByTwo(n){
  var doubled = n/2;
  return doubled;
}

// Write the test for this function below
function isPrime(n){
  // If n is less than 2 or not an integer then by definition cannot be prime.
   if (n < 2) {return false}
   if (n != Math.round(n)) {return false}

   // Now assume that n is prime, we will try to prove that it is not.
   var isPrime = true;

   // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {isPrime = false}
   }

   // Finally return whether n is prime or not.
   return isPrime;
}


// TESTS
test( "Example test", function(assert) {
  var actual = example();
  assert.equal(actual, "example", "Passed!" );
});

test("check how many elements in a given array", function(assert){
  var arr = [1, 2, 3, 4, 5];
  var actual = checkArrayLength(arr);
  assert.equal(actual, 5, "Passed!");
});

test("Is the array of numbers doubled", function(assert) {
  var arr = [1, 2, 4];
  var actual = double(arr);
  assert.deepEqual(actual, [2, 4, 8], "Passed!");
});

test("Has the array been messed with?", function(assert) {
  var arr = [{name:"Robert", age:43}, {name:"Emma", age:25}, {name:"Josh", age: 29}];
  var actual = messWithArray(arr);
  var result = [{"Robert":43}, {"Emma":25}, {"Josh":29}];
  assert.deepEqual(actual, result, "Passed!");
});

test("Is the title on the DOM", function(assert) {
  var actual = getTitleFromDom();
  assert.equal(actual, "HELLO WORLD", "Passed!");
});

test("Are all the elements on the DOM", function(assert) {
  var actual = checkTheElementsOnTheDom();
  assert.equal(actual, true, "Passed!");
});

test("Are all the elements on the DOM", function(assert) {
  var actual = checkTheElementsOnTheDom();
  assert.equal(actual, true, "Passed!");
});

test("test the fucntion divideByTwo", function(assert) {
  // write the test here

});

test("test the fucntion isPrime", function(assert) {
  // write the test here
  
});
