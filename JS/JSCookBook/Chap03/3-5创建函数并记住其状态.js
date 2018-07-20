function outer(x) {
    return function (y) {
        return(x*y);
    }
}
var multiThree = outer(9);
console.log(multiThree(2));