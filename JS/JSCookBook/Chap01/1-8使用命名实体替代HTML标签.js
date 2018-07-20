var aHTML = "<p> this is a <span> paragraph</span> </p>";
bHTML = aHTML.replace(/</g,"&lt;");
bHTML = bHTML.replace(/>/g,"%&gt;");
console.log(bHTML);


