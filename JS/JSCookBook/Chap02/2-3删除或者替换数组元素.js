var animals = new Array('dog','cat','seal','walrus','lion','cat');
animals.splice(animals.lastIndexOf('cat'),1,'monkey');
console.log(animals.toString());

animals.splice(-1,1,"mokey")
console.log(animals.splice(2));