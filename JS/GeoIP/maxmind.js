var maxmind = require('maxmind');
const readline = require('readline');
const fs = require('fs');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
var lookup = maxmind.openSync('GeoLite2-City_20180807/GeoLite2-City.mmdb', {
    cache: {
        max: 500, // Max items in cache, by default it's 6000
    }
});
var ajson;

const rl = readline.createInterface({
    input: fs.createReadStream('ip.txt'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    //console.log(`Line from file: ${line}`);
  //  console.log(lookup.get(`${line}`));;
    ajson=lookup.get(`${line}`);
    console.log(ajson.country.names.en);

});






