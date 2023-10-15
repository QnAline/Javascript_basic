//if you assign default value and then you pass the value it will take passed value

function multiply(num1,num2, num3=2){
    console.log(user);//global variable printed
    return num1*num2*num3;

}
let user="Queen";
let mul=multiply(3,4);
console.log(mul);