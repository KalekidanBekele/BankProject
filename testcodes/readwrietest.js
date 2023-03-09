const fs = require('fs');
/*fs.readFile('inputfile.txt','utf8',(err,data)=>
{
    if(err)
    {
        console.error(err);
        return;
    }
    console.log(data);
});*/

/*const content = "40";
fs.writeFile('inputfile.txt', content,err =>
{
    if(err)
    {
        console.err;
        return;
    }
});*/

function print() {
    fetch("inputfile.txt")
      .then(function(response) { return response.text; })
      .then(function(text) {
        var num = parseInt(text);
        //do the red/green coloring using num
      });
  }
  setInterval(print, 1000);