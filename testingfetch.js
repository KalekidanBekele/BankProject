const fs = require('fs');

try
{
    const jsonString = fs.readFileSync('./banking_data.json', 'utf-8');
    const user = JSON.parse(jsonString);
    
}
catch(err)
{
    console.log(err);
}

echo("user");