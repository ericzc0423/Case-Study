var str='This is a sentetence with a list of item: ' + 'cherries, oranges, apples, limes, bananas. That was the list of items.';

var start = str.indexOf(':');
var end = str.indexOf('.');
var listStr=str.substring(start+1, end);
console.log(listStr);
var fruits = listStr.split(",");
console.log(fruits);