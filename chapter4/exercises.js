//Chapter 4 - Exercise 1 - The Sum of a Range////////////////////////////////////////////////////

//Returns an array that starts at start ends with end and steps by step.
//Step can be either positive or negative.
function range(start, end, step) {
  //Define Step
  if(step == null)
    step = 1;

  //Variable to hold the resulting array from range()
  var array = [];
  
  //Set up for when step is positive vs negative
  if(step > 0) {
    for(i = start; i <= end; i += step)
      array.push(i);
  } else {
    for(i = start; i >= end; i+= step)
      array.push(i);
  } 
  return array;
}

//////////////////////////////////////////////////////

//Sum gives the sum of any give array.
function sum(array) {
  //Set up a variable to hold the result
  var total = 0;

  //Loop through the array and add the given array index to itself
  for(var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

//Chapter 4 - Exercise 2 - Reversing an Array////////////////////////////////////////////////////

//Reverse an array into newArray
function reverseArray(array) {
  //Set up new array to hold result.
  var newArray = [];

  //Loop through the array from the end push value to newArray
  for(var i = array.length - 1; i >= 0; i--)
    newArray.push(array[i]);
  return newArray;
}

//////////////////////////////////////////////////////

//Reverse an array in place
function reverseArrayInPlace(array) {
  //Loop, starting at zero and while i < half of the array's length. 
  for(i = 0; i < Math.floor(array.length/2); i++) {
    //Store the first value of the array in old
    var old = array[i];
    //Set the first value of the array to the last value of the array
    array[i] = array[array.length - 1 - i];
    //Set the last value of the array to the value stored in old
    array[array.length - 1 - i] = old;
  }
  return array;	
}

//Chapter 4 - Exercise 3 - A List////////////////////////////////////////////////////

//Turns an array into a 'list' object
//A list is a nested set of objests, with 
//the ovject holding a reference to the second, 
//the second to the thid, and so on

//Array in this example is Array = [10, 20]

function arrayToList(array) {
  //Set list to null
  var list = null;
  //Need to start at the end because of the construct of the list in the example
  for(var i = array.length - 1; i >= 0 ; i--)
    list = {value: array[i], rest: list};
  return list;
}

//////////////////////////////////////////////////////

//Turns a list into an array
//List in this example is {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}
function listToArray(list) {
  //Prep the array 
  var array = [];
  //Start which node (which = list) 
  //while node (which is true boolean) 
  //node = node.rest which is ever deeper in the list
  //Until node = null which is false and breaks the loop
  for(var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

//////////////////////////////////////////////////////

//Adds the given value to the existing list
function prepend(value, list) {
  return {value: value, rest: list};
}

//////////////////////////////////////////////////////

//Returns the 'nth' value in the list
//Recursive function until n == 0, then it returns list.value
function nth(list, n) {
  if(!list)
    return undefined;
  else if(n == 0)
    return list.value;
  else
  return nth(list.rest, n - 1);
}

//Chapter 4 - Exercise 4 - Deep Comparison////////////////////////////////////////////////////

function deeEqual(a,b) {
  //Does a === b? - if so, return true.
  if(a === b)
    return true;

  //Is a null or a not an object OR b null or b not an objec?
  //If any of those are true, return FALSE
  if(a == null || typeof a != "object" ||
     b == null || typeof b != "object")
    return false

	//Set up two counter variables to total the number of props in A and B
  var propsInA = 0;
  var propsInB = 0;

  //For each prop in a, add 1 to propsInA (how many props in A)
  //At this point we've determined if a and b are objects or not
  for(var prop in a)
    propsInA += 1;

  //For each prop in b, do two things
  //1. Add 1 to propsInB
  //2. We're using a local variable, so it's checking to see if the current prop is not in a
  //It then runs a negated recursive deepEqual with the values of the current prop in a[prop], b[prop]
  //This negation recursion is a bit weird.. but it's saying if !deepEqual which would run a[prop], b[prop]
  //through the if(a==b) at the top of the function. If a == b is true a negation of that would be false
  //and would fail the if() below. If a == b is false - the negation of that is true and that would force
  //the below if to return it's contained statements. 
  for(var prop in b) {
    propsInB +=1;
    if(!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }		

  //If it makes it all the way through all of the above, it compares the # contained in propsInA and 
  //propsInB to see if they are equal. If they are - true, if they aren't false. Kind of a final check
  //to complete the function.
  return propsInA == propsInB;
}
