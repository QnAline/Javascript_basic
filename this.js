let laptop1={
    name:'Lenovo', 
    ram: '16gbs',
    'storage ssd':'500',
    display:function(){
       console.log(this['storage ssd']);
    }
}

laptop1.display();