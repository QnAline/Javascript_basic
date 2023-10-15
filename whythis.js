// function compareoutside(laptop1,laptop2){
//     if(laptop1>laptop2)
//         console.log(laptop1);
//     else
//      console.log(laptop2);
//     }

//TO PUT IT INSIDE AN OBJECT
let laptop1={
    name:'Lenovo', 
    ram: '46gbs',
    'storage ssd':'500',
    compare: function(laptop2){
            if(this.ram>laptop2.ram)
                console.log(this);
            else
             console.log(laptop2);
           
    }
}
let laptop2={
    name:'HP', 
    ram: '32gbs',
    'storage ssd':'600'
}
laptop1.compare(laptop2);