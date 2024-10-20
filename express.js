import express from 'express';
import path from "path";

const app = express();
 app.use(express.static(path.join(path.resolve(),"public")));

// setting up view Engine
app.set("view engine","ejs");
app.get("/",(req, res)=>{
    // res.sendStatus(404)
    // res.json({
    //     success: true,
    //     product: [],
    // });
     const pathlocation=path.resolve();
    //  res.sendFile(path.join(pathlocation,"./index.html"));
    res.render("index",{name:"Sarthak Shukla"});
     
});
app.listen(4000,()=>{
  console.log('Server is working');
});