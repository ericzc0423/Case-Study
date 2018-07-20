var reverseArray = function (x,indx,str) {
    return indx == 0 ? str :
            reverseArray(x, --indx, (str+=" "+ x[indx]));
}

var arr = ['apple','orange','pear','lime'];
var str = reverseArray(arr, arr.length,"")
console.log('' +
    str);