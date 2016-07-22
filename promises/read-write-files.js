var file = require('./../promises/fs-promises');

var main = file.readFile(__dirname + '/../main.js', 'utf8'), //main is a promise, bc file.readfile returns a promise
    print = file.readFile(__dirname + '/../print.js', 'utf8'),
    logic = file.readFile(__dirname + '/../logic.js', 'utf8'),
    error = file.readFile(__dirname + '/../error.js', 'utf8');


Promise.all([main, print, logic, error])
.then(function(data) {
  var string = data.join('');
  console.log('The string is: ' + string);
  return file.writeFile(__dirname + '/../build/app.js', string, 'utf8');
})
.catch(function(err){
  console.log(err);
});
