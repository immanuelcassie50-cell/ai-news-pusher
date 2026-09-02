const fs=require("fs");
const vm=require("vm");
const path=require("path");
const slidePath=path.join("D:/","新课开发","内训师和表达","系列进阶课");
const slides=fs.readdirSync(slidePath).filter(f=>f.includes("12")&&f.includes("内训"))[0];
const finalPath=path.join(slidePath,slides,"授课PPT","slides","slide-98.js");
const code=fs.readFileSync(finalPath,"utf8");
const out=[];
try{new vm.Script(code);out.push("vm:OK");}catch(e){out.push("vm:ERR:"+e.message);}
try{require(finalPath);out.push("require:OK");}catch(e){out.push("require:ERR:"+e.message);}
fs.writeFileSync("D:/CC/temp/bom_result2.txt",out.join("
"));
console.log(out.join(","));
