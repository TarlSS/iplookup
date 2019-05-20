const fs = require('fs');
const path = require('path');


const filepath = path.join(__dirname, 'iplist.txt');    //Name the list where you have ips

var text = fs.readFileSync(filepath, 'utf8');
var ips = text.replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/);
var request = require('request');

var accessKey = ""; //SET YOUR ACCESS KEY HERE SECURELY (Env,etc)

for (var i = 0; i < ips.length; i++) {
    var ip = ips[i];
    data = find(ip)
}

function find(ip) {
    var url = `http://api.ipstack.com/${ip}?access_key=${accessKey}`

    request(url, function (error, response, body) {
        if (body.ip && body.country) {
            console.log(body.ip + "," + body.country);
            var output = body.ip + "," + body.country + "\n";
            fs.appendFileSync("ipCountryOut.txt", body)
        }

        return body;
    });
}


