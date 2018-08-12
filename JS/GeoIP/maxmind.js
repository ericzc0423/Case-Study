var maxmind = require('maxmind');
const readline = require('readline');
const fs = require('fs');

var lookup = maxmind.openSync('GeoLite2-City_20180807/GeoLite2-City.mmdb', {
    cache: {
        max: 500, // Max items in cache, by default it's 6000
    }
});
var ajson;
var all_location;
var line_ip;
var line_count;

const rl = readline.createInterface({
    input: fs.createReadStream('ip.txt'),
    crlfDelay: Infinity
});
var writerStream = fs.createWriteStream('all_IPS.txt');
rl.on('line',(line) =>{
    line_ip=line.split(" ")[0];
    line_count=line.split(" ")[1];
    ajson=lookup.get(`${line}`);
    all_location = `${line}`+'\t'+ajson.country.names.en+'\t'+line_count+'\n';
    writerStream.write(all_location,'UTF-8');
});