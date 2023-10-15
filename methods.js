let laptop={
    name:'Lenovo', 
    ram: '16gbs',
    'storage ssd':'500',

    benchmark: ()=> console.log("Good performance")

}
//to call a function inside an object ; we can't call it itself since it is defined inside an object
laptop.benchmark();