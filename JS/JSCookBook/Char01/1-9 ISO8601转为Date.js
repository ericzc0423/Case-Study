var distr = "2018-07-20T14:50:20"
distr=distr.replace(/\D/g, ' ');
console.log(distr);
var dtcomps = distr.split(" ");
console.log(dtcomps);
var convdt = new Date(Date.UTC.apply(null,dtcomps));
var convtm = new Date(Date.UTC.apply(null,dtcomps));
console.log(convdt.toDateString());
console.log(convtm.toTimeString());