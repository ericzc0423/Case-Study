var searchString = "Now is the time, this is the tame";
var re = /t\w{2}e/g;
var replacement = searchString.replace(re,'place');
console.log(replacement);

//替换空格
var testString1 = 'The tech books';
var re1 = /tech\s+books/;
var replacement1= testString1.replace(re1,'techbooks')
console.log(replacement1);

//

var re3 = /a(p+).*pie/ig;
var result = re3.exec("the apples in the aPpppple pie are tart");
console.log(result);
console.log(result.index);
console.log(result.input);