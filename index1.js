const fs = require('fs');
// ** sync file

// fs.writeFileSync("./ds-b.txt","Hello ABES COLLEGE Student ");
// fs.writeFileSync("./abes.txt","Hi abes College student");
//  const result = fs.readFileSync("./abes.txt","utf-8")   
//  console.log(result);

// ** Asyncfile
//  fs. writeFile("../abes.txt","We are code",() => {});
fs. readFile("./abes.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
        
    }
    else{
        console.log(result);
        
    }
});