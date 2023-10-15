//we normally call a function so we can call it inside a function
function factorial(number){
    //return number*(number-1)!
    if(number===0)
    return 1;
    else
    return number*factorial(number-1);
    
}
let num=6;
let result=factorial(num);
console.log(`the factorial of ${num} is ${result}`);