//filter selects elements based on condition
//maps performfs operation on those selected elements
let nums=[1,2,3,4,5,6];
nums.filter(n=>n%2===0).map(n=>n*2).forEach(n=>console.log(n));

//To print sum for example from elements since it is one value we can use  reduce method
let sum=nums.filter(n=>n%2===0).map(n=>n*2).reduce((a,b)=> a+b);
console.log(`sum is ${sum}`);