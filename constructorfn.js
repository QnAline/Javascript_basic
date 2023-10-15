//these are functions where we can have object that share the same blueprint

function construct(ram,storage){
this.ram=ram;
this.storage=storage;
return this;
}

let lenovo=new construct('16gbs','500');
let hp=new construct("32gbs",'1028');
console.log(lenovo);
console.log(hp);