var animals = new Array('dog','cat','seal','elphant','walrus','lion');
console.log(animals.indexOf('seal'));
console.log(animals.indexOf('cat'));

console.log(animals.lastIndexOf('cat'));

var nums = [2,4,19,15,183,6,7,199,1,1];
var over = nums.findIndex(function (element) {
    return(element>100);

})

console.log(nums[over]);