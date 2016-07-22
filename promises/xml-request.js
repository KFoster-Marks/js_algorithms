//requires node module
var request = require('request');

function ajax(url) {
  return new Promise(function(resolve, reject){
    request(url, function(err, response){
      if(!err && response.statusCode === 200) {
        console.log("*****");
        resolve (response.statusCode);
      } else {
        reject({
          status: this.statusCode,
          statusText:err
        });
      }
    });
  });
}

function areThereInternets(){
  return Promise.all([ajax('https://google.com/about'), ajax('https://netflix.com'), ajax('https://amazon.com')])
  .then(function(){
    console.log("There ARE Internets!");
    return true;
  })
  .catch(function(err){
    console.log(err);
    return false;
  });
}
areThereInternets();
