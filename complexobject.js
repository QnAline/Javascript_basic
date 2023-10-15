//having object within another objects
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
console.log(student);
console.log(student.laptop);// to access laptop within student object
console.log(student.laptop['storage ssd'])
console.log(student.year1?.length)//to remove error when property is not defined we have to use ?
delete student.laptop //to delete a property
console.log(student);
