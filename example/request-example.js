// require request module and Node's file system (fs) module
const request = require('request');
const fs = require('fs');

// You must add the protocol (http:// or https://)
let url = 'https://sytantris.github.io/http-examples/';

// Standard outputs for request() are err, response, and body
request(url, function(err, response, body){
  // If I get an error, throw the error code
  if (err) throw err;
  console.log('Response Status Code: ', response.statusCode);
});


// You can also write the snippet as a chained function
request.get(url)
       .on('error', function(err){
         throw err;
       })
       .on('response', function(response){
         console.log('Response Status Code: ', response.statusCode)
       })
       // pipe: interface for converting between readable and writable
       .pipe(fs.createWriteStream('./downloaded.html'));
