// const http=require("http");
import http from "http";
import fs from "fs";
// const gfname=require("./feature");
// import gfname,{ gfname1,gfname2 } from "./feature.js";
// import * as myObj from "./feature.js";
import  path  from "path";
import { generateLove } from "./feature.js";
import { homedir } from "os";
const home = fs.readFileSync("./index.html");
const server=http.createServer((req,res)=>{
  if (req.url==="/about"){
    res.end(`<h1>Love is ${generateLove()}</h1>`)
  }
  else if (req.url==="/"){
   res.end(home);
  }
   else if (req.url==="/contact"){
    res.end("<h1>Contact page</h1>")
  }
  else 
    res.end("<h1> page not found</h1>")
  
 
});
server.listen(5000,()=>{
  console.log("server is working");
});


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('sarthakdotcom')
})
app.get("/login",(req,res)=>{
    res.send('<h1>please login at sarthakdotcom</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})