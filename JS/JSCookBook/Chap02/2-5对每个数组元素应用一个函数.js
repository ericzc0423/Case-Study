var charSets = ['ab','bb','cd','ab','cc','ab','dd','ab'];

function replaceElement(element,index,array) {
    //if (element=='ab') array[index] = "**";
    (element == 'ab') && (array[index] = "**");
}
charSets.forEach(replaceElement);

console.log(charSets);