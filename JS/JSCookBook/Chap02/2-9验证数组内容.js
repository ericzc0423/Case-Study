function testValue(element,index,array) {
    var textExp = /^[a-zA-Z]+$/;
    return textExp.test(element);
}

var elemSet = ["**",123,"aaa","abc","-",46,"AAA"]
var result = elemSet.every(testValue);
console.log(result);
result=elemSet.some(testValue);
console.log(result);
var elemSet2 = ["elephant","cat","dog"];

result = elemSet2.every(testValue);
console.log(result);

var newMap = {};
var key = 'toString';

console.log(key in newMap);
console.log(newMap[key]);

var secondMap = Object.create(null);
console.log(key in secondMap);
secondMap[key] = 'something diff';
console.log(key in secondMap);
console.log(secondMap[key]);