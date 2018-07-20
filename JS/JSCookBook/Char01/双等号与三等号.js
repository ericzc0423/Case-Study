var str1 = new String('test');

if (str1 == 'test'){
    console.log("双等号判断为相等");
}

if (str1 !== 'test'){
    console.log("三等号判断为不相等");
}

var num2 = 0;
var str2 = '0';

console.log(num2==str2);
//松散相等是将str转化为toNumber(str),所以会是相等的
console.log(num2 === str2);


var str3;
if (str3==null){
    console.log('bad value');
}

var str4 = 'test';
var str5 = new String('test');

if(str4===str5){
    console.log('str4 equals str5');
}
if(str4==str5){
    console.log('str4 equals str5');
}