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
