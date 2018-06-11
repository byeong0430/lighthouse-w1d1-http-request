// require 'request' module and Node's 'fs' module
const request = require('request');
const fs = require('fs');

// You must add the protocol, in this case, https://
let url = 'https://sytantris.github.io/http-examples/future.jpg';

request.get(url)
       .on('error', function(err){
         if (err) throw err;
       })
       .on('response', function(response){
         console.log('HTTPS Response Code:', response.statusCode);
         console.log('HTTPS Response Message:', response.statusMessage);
         console.log('HTTPS Content TYpe:', response.headers['content-type']);
         console.log('Downloading image...');
       })
       .pipe(fs.createWriteStream('./future.jpg')
               .on('finish', function(){
                console.log('Download complete.');
               })
            );
