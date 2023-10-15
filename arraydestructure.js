//to separate array elements to variables 
let data=[3,4,2,1];
//let [a,b,c,d]=data;
[a,b,,d]=data;//to skipe elements
console.log(d);

//TO SWAP ELEMENTS
let num1=5;
let num2=6;
[num1,num2]=[num2,num1];
console.log('values after being swapped',num1,num2);

//TO CREATE ARRAY FROM STRINGS WE USE SPLIT METHODS
let text='my name is Aline and i do like coding'.split(' ');
[a,b,c,...d]=text//all remaining will be assigned to variable d
console.log(d);
