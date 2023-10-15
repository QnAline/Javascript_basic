let number=Boolean(4)//explicit conversion
console.log(typeof number)
//coersion is to change different type into the same type in order to perform a task
let x
console.log(x, typeof x)
x=5
console.log(x, typeof x)
x=4+"ABC"//this coercion takes a plus sign as to concatenate string so 4 is first converted to a string
console.log(x, typeof x)
x="ABC"+true
console.log(x, typeof x)
x=4- "ABC"// ABC converted to number so answer will be NaN and type is number
console.log(x, typeof x)

//IMPLICIT CONNVERSION TO A NUMBER - / *
x= 4-"ABC"
console.log("\n"+x, typeof x)
 //IMPLICIT CONNVERSION OF BOOLEAN TRUE 1 AND FALSE 0
 x=4/false
 console.log(x, typeof x)
 //IMPLICIT CONVERSION OF NULL 0
 x= -4/null
 console.log(x, typeof x)
 //UNDEFINIED WITH NBR, NULL AND BOOLEAN GIVES NaN
x= 4 + undefined
console.log(x, typeof x)
x="4"+ undefined
console.log(x, typeof x)// will give its concatenation

// FOR BOOLEAN  
//IF nbr mot equal to zero will give  us true otherwise false
let y= Boolean(8)
console.log("\n"+y, typeof y)
y=Boolean(0)
console.log(y, typeof y)
y= Boolean("go")
console.log(y, typeof y)//true other undefined / null will be false
y=!5
console.log(y, typeof y)

//converting a string to a number
y=Number("123")
console.log("\n"+y, typeof y)
y=Number("123   abc")
console.log(y, typeof y)// will give you NaN
y=parseInt("123   2abc")// will get  number only but only the string is started by a number
console.log(y, typeof y)

