//to reduce function expression to small codes we replace anonymous function with an arrow

//let add= (num1,num2) => num1+num2;//if it is one statement

let add=(num1,num2) =>
{
    if(num1<0 || num2<0){
        console.log("no addition for negative numbers");
        
    }
    else{
      console.log(num1+num2);
    }
}
let result=add(4,-5);
