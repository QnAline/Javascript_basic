// we have different methods that can be applied to an array
let data=['scratch',1,{ram:'16gbs',storage:500},
function(){
    console.log('function inside an array');
}]
data.push(3,7,9,2,22,11);// we can push multiple elements in an array
data.pop();// ot removes last element even though you may specify an index
data.shift();//removes from first element
data.unshift('Hello',7,3);//insert from first element

//splice method deletes element from specified element
data.splice(6,2,'its')//from six delete 2 elements and insert it's there
console.log(data);