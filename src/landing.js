const https = require('https');

const options = {
    hostname: 'httpbin.org',
    path: '/get',
    headers: {
        Authorization: 'authKey'
    }
}

const options_one = {
    hostname: 'localhost',
    port:3002,
    path: '/'
}


https.get(options_one, (response) => {

    var result = ''
    response.on('data', function (chunk) {
        result += chunk;
    });

    response.on('end', function () {
        console.log(result);
    });

});