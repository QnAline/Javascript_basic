// set is a collection of ordered , unique elements 
//doesn't have index

let set=new Set("h 123");// you can pass strings and prints a sets of each value in a string
set.add( 2);
set.add('queen')
set.add('2')

//to print value in sets
set.forEach((value) =>console.log(value));
//to check if we have elements there 
console.log(set.has(2));