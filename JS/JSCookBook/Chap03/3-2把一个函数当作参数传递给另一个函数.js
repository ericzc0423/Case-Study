function otherFuction(x,y,z) {
    x(y,z);
}

var param = function (arg1,arg2) {
    console.log(arg1 + "test" + arg2);
}

otherFuction(param,"Hello","World");

// var nums = [1,2,3,4,5];
// var sum = 0;
// for (var i = 0, i = nums.length; i++ ) {
//     sum+=nums[i];
// }
//
// console.log(sum);