function someFunc() {
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
}

someFunc()