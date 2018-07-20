var animals = new Array('dog','cat','seal','elphant','walrus','lion');
var domestic = animals.slice(4,7)
console.log(domestic);

var mArray=[];
mArray[0] = ['apple','pear'];
mArray[1]=['lime','peach','banana'];
mArray[2]=['strawberry','lemon'];

var nArray = mArray.slice(1,2);
console.log(mArray[1]);

nArray[0][0] = 'raspberry';
console.log(nArray[0]);
console.log(nArray[1]);
