// WRITE YOUR FUNCTIONS HERE
function firstTest() {
  return true;
}

// REFACTOR: DO NOT USE .LENGTH
// REFACTOR: DO NOT USE FOR LOOPS
function checkArrayLength(arr) {
  return arr.reduce(function (acc) { return acc + 1 }, 0);
}

// REFACTOR: DO NOT use for/while loops
// REFACTOR: DO NOT USE forEach on this one!
function double(arr){
  return arr.map(function (item) { return item * 2 });

}

//Make arr [{name:'Robert', age:43}, {name:'Emma', age:25}, {name:'Josh', age: 29}]
//into: [{'Robert':43}, {'Emma':25}, {'Josh':29}];
function messWithArray (arr) {
  return arr.map(function (ob) {
    var newOb = {}
    newOb[ob.name] =  ob.age
    return newOb
  })
}

function getTitleFromDom() {
  return document.getElementById('title').innerHTML
}

// Just check that the paragraph and image tags are there
function checkTheElementsOnTheDom() {
  return document.getElementById('paragraph') && document.getElementById('image')
}

//Now write tests for the following functions:

function divideByTwo(n){
  var halved = n/2;
  return halved;
}

function isPrime(n){
  // If n is less than 2 or not an integer then by definition cannot be prime.
   if (n < 2) { return false; }
   if (n != Math.round(n)) { return false; }

   // Now assume that n is prime, we will try to prove that it is not.
   var isPrime = true;

   // Now check every whole number from 2 to the square root of n. If any of these divides n exactly, n cannot be prime.
   for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) { isPrime = false; }
   }

   // Finally return whether n is prime or not.
   return isPrime;
}



/* ------------- Q-UNIT ------------- */
/* ------------- TESTS ------------- */

test( 'Check that tests are working, firstTest returns true', function(assert) {
  var actual = firstTest();
  assert.ok(actual, 'true === true' );
});

test('check how many elements in a given array', function(assert){
  var arr = [1, 2, 3, 4, 5];
  var actual = checkArrayLength(arr);
  var expected = 5
  assert.equal(actual, expected, 'checkArrayLength returns correct value!');
});

test('Is the array of numbers doubled', function(assert) {
  var arr = [1, 2, 4];
  var actual = double(arr);
  var expected = [2, 4, 8];
  assert.deepEqual(actual, expected, 'Numbers have been doubled!');
});

test('Has the array been messed with?', function(assert) {
  var arr = [{name:'Robert', age:43}, {name:'Emma', age:25}, {name:'Josh', age: 29}];
  var actual = messWithArray(arr);
  var expected = [{'Robert':43}, {'Emma':25}, {'Josh':29}];
  assert.deepEqual(actual, expected, 'Passed!');
});

test('Is h1 title on DOM with "HELLO WORLD"', function(assert) {
  var actual = getTitleFromDom();
  var expected = 'HELLO WORLD'
  assert.equal(actual, expected, 'Passed!');
});

test('Are all the elements on the DOM', function(assert) {
  var actual = checkTheElementsOnTheDom();
  assert.ok(actual, 'Passed!');
});

test('test the function divideByTwo', function(assert) {
  var arr = [0,1,2,10,80,-1,-10,-5000]
  var actual = arr.map(divideByTwo)
  var expected = [0,0.5,1,5,40,-0.5,-5,-2500]
  assert.deepEqual(actual, expected, 'successfully divides n by two')
});

test('test the fucntion isPrime', function(assert) {
  var arr = [0,1,2,3,4,5,10,11,100]
  var actual = arr.map(isPrime)
  var expected = [false, false, true, true, false, true, false, true, false]
  assert.deepEqual(actual, expected, 'successfully divides n by two')
});
