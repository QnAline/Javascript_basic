//is the same as object
//we are not giving propeties we give key to differentiate values
//they are commonly used in  database
//map is used for collection

let map=new Map();
map.set("greet",'hy');
map.set("verb",'got');
map.set('greet','hy');//it set new value so this element will not be added


console.log(map.keys());//to get a key
console.log(map.get('greet'));//to get value of a key

// to print all values we have to pass key and values
for([key,value] of map){
    console.log(key,':',value);
}
console.log('using foreach');

map.forEach((value,key)=>console.log(key,':',value))