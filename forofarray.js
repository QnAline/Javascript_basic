let array=[4,5,2,0];
array[20]=3;;
console.log(array,'\n');// it will include spaces

//TO PRINT ONE ELEMENT BY ONE
// for(let n of array){
//     console.log(n);//prints values only 
// }
for(let key in array){
    console.log(key,array[key]);// prints only those with values
}