//to print all values without printing all values one by one
let input="ram"
let student={
    'reg no':221000507,
    year: 3,
    laptop: {
        name:'Lenovo',
         ram: '16gbs',
        'storage ssd':'500'
    }
}
for (let key in student){//key as propeties
  console.log(key, student[key]);
}
for(let key in student.laptop){
console.log(student.laptop[key]);
}
