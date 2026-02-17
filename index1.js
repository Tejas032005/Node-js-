const fs = require('fs');
// ** sync file

// fs.writeFileSync("./ds-b.txt","Hello ABES COLLEGE Student ");
// fs.writeFileSync("./abes.txt","Hi abes College student");
//  const result = fs.readFileSync("./abes.txt","utf-8")   
//  console.log(result);


// ** Asyncfile
//  fs. writeFile("../abes.txt","We are code",() => {});
// fs. readFile("./abes.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
        
//     }
//     else{
//         console.log(result);
        
//     }
// });

//**practice code  */
// fs.writeFileSync(".a1.txt","This is the a1 file from sync method");
// const result = fs.readFileSync("./a1","utf-8");
// console.log(result);
  
// fs.appendFileSync("./abes.txt",`PHD`);

// fs.cpSync("./abes.txt","./a2.txt");
// fs.unlinkSync("./abes.txt");
// fs.unlink("./a1.txt",(err)=>{
// if(err){
//     console.log("Error",err);
    
// }
// else{
//     console.log("data delete");
    
// }
// });





// os 
const os = require('os');
console.log("system platform", os.platform());// for system platform 
console.log("user info", os.userInfo());// user info wih path 
console.log("cpu",os.arch());// for checking cpu architecture 
console.log("Free memory", os.freemem());// free memory balace in our system 
console.log("total memory", os.totalmem());// total memory 
console.log("up time", os.uptime());
console.log("Home directory", os.homedir());
console.log("host name",os.hostname());


