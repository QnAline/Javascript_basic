//we can define a laptop with its properties ram, storage etc. From real world to virtual world
//we can use [] or . depending on the application

let student='ram'
let laptop={
    name:'Lenovo', ram: '16gbs',
    'storage ssd':'500'
}
console.log(laptop);// all will be printed
console.log(laptop.name);//to print value of name
console.log(laptop['storage ssd']);//we can't use dot since word are separated by space
console.log(laptop[students]);