//anonimous function without a function name
let addition=function(num1,num2)
            {
                return num1+num2;
            }

//let sum=addition(5,6);
//console.log(sum);
//console.log(addition);
let sum=addition;
let result=sum(5,6);
console.log(result);
console.log(sum);
//INTERCHANGED ONE