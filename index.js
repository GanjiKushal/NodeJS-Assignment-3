const http = require('http');
const fs=require("fs");
fs.writeFile("./index.html","<h1>Hello World</h1><p>This is Kushal Ganji</p>",(error)=>{
    console.log(error)
})
http.createServer((req,res)=>{
    fs.readFile("./index.html","utf-8",(error,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(5000)
// const fs = require('fs/promises')
// const myFileWriter = async (fileName, fileContent) => {
// 	// write code here
// 	// dont chnage function name
// 	//  fs.writeFile(fileName,fileContent,(err)=>{(err)
//     //     console.log(err)
//     //  })
//     try {
//         await fs.writeFile(fileName,fileContent)
//     } catch (error) {
//         console.log(error)
        
//     }
//      //fs.writeFile(fileName,fileContent)
// }
// myFileWriter("index.html","<h1> Hello World </h1> <p> This is dsdc </p>")
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     try {
//         fs.readFile("index.html",(err,data)=>{
//             res.end(data)});
//     } catch (error) {
//         console.log(error)
//     }
//     // // fs.readFile("index.html",(err,data)=>{
//     // //     res.end(data);
//     // })
//     //fs.readFile("index.html")
// }).listen(5000);