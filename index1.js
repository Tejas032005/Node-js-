const fs = require('fs');
// fs.writeFileSync("./ds-b.txt","Hello ABES COLLEGE Student ");
// fs.writeFileSync("./abes.txt","Hi abes College student");
 const result = fs.readFileSync("./abes.txt","utf-8")
 console.log(result);
 