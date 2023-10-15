//to take every elements using function it can also be index ,and array itself
let numbers=[42,65,85];
numbers[20]=90;

numbers.forEach((n,i,numbers)=>{
    console.log(n,i,numbers);
})