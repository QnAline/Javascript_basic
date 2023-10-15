//DRY Do not Reapet Yourself
//to print a anyeong 5 times 
//initialise condition increment

let counter=1
while(counter<=5){
    console.log("Anyeong");
    counter++
}
console.log(counter);// it will first increment

// to reverse starting the biggest to the slowest
console.log("\n");
counter=5
while(counter>=1){
    console.log("Anyeong");
    counter--
}
console.log(counter);// it will first increment

// if a condition is not true
console.log("\n");
counter=3
while(counter>=5){
    console.log("Hi");// it is not being executed 
}
// to execute it we can use do while  loop
do{
    console.log("hi");
}
while(counter>=5)