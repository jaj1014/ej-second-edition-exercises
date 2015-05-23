//Chapter 3 - Exercise 1 - Min Function////////////////////////////////////////////////////

//Write a function that takes two arguments and returns their minimum
function min(a, b) {
  //make sure both arguments are numbers
  if(isNaN(a) || isNaN(b))
    return "Please retry using only numbers.";
  //if a less than b - a is min
  else if(a < b)
    return a;
  //otherwise b is min
  else
    return b;
}

//Chapter 3 - Exercise 2 - Recurison////////////////////////////////////////////////////

//Define a recursive function isEven corresponding to this description. 
//The function should accept a number parameter and return a Boolean.

function isEven(number) {
  //make sure argument is a number
  if(isNaN(number))
    return 'Please retry using a number';
  //if it's equal to 0 it's even (true)
  else if(number == 0)
    return true;
  //if it's equal to 1 it's odd (false)
  else if(number == 1)
    return false;
  //if it's less than zero make positive and try again
  else if(number < 0)
    return isEven(-number);
  //if none of the above, re-run isEven with number minus 2
  else
    //recursion
    return isEven(number - 2);
}

//Chapter 3 - Exercise 3 - Bean Counting////////////////////////////////////////////////////

//Write a function countBs that takes a string as its only argument and returns a 
//number that indicates how many uppercase “B” characters are in the string.

//First iteration of countBs w/o helper function
function countBs(string) {
  //set a counter variable to count the Bs
  var count = 0;
  //loop - start 0, while s is less than string length, do the below
  //add 1 to s at each iteration
  for(var s = 0; s < string.length; s++)
    //check in the character at 's' == b
    if(string.charAt(s) == "B")
      //add 1 to the counter variable
      count += 1;

  //return the count
  return count;
}

//Helper function - countChar()
//this one takes a second argument 'letter'
//everything is the same as above except we swapped the letter string with 
//whatever the second argument is
function countChar(string, letter) {
  var count = 0;
  for(var s = 0; s < string.length; s++)
    if(string.charAt(s) == letter)
      count += 1;

  return count;
}

//Second iteration of countBs w/ helper function
//should be straightforward based on the above
function countBs(string) {
  return countChar(string, "b");	
}
