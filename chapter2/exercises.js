//Chapter 2 - Exercise 1 - Looping a Triangle////////////////////////////////////////////////////
 
//Start at #. While the length of hash is less than 8
//add a # to the end of hash.
//print/console.log hash on each iteration.
for(var hash = "#"; hash.length < 8; hash += "#") {
  console.log(hash);
}
 
//Chapter 2 - Exercise 2 - Fizz Buzz////////////////////////////////////////////////////
 
//For loop with count variable starting at 1 and increasing 
//by 1 each time code block runs. 
for(var count = 1; count <= 100; count++) {
    //If the remained of count divided by x equals 0, count is divisible by x
    //If divisible by 3 print Fizz
    if(count % 3 == 0)
        console.log("Fizz");
 
    //If divisible by 5 print Buzz
    else if(count % 5 == 0)
        console.log("Buzz");
 
    //Otherwise, pring count as the number it is
    else
        console.log(count);
}
 
//Print FizzBuzz if both divisible by 3 and 5:
 
for(var i = 1; i <= 100; i++) {
    //Set up a variable to store Fizz/Buzz
    var result = "";
 
    //If i divisible by 3 += Fizz string
    if(i % 3 == 0)
        result += "Fizz";
 
    //If i divisible by 5 += Buzz string
    if(i % 5 == 0)
        result += "Buzz";
 
    //log either result or n, whichever has a value. 
    //The clever thing is how it uses the return string to create Fizz (3), Buzz (5) or FizzBuzz (3 and 5) 
    //Is basically concatenating the result when both conditions are met
    console.log(result || n);
}
 
//Chapter 2 - Exercise 3 - Chess Board////////////////////////////////////////////////////

//Initialize the board variable so we have somewhere to store the string we're creating
var board = "";
//This is to control the size such that this value equals the length and number of lines
var size = 20;

//Outer loop controls the height by adding "\n" after each line loop runs
for(var a = 0; a < size; a++) {
 //Inner loop generates lines
  for(var b = 0; b < size; b++) {
    //If a + b is divisible by 2 it prints " ", otherwise prints "#"
    if((a + b) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}
//Console.log the board string created above
console.log(board);
