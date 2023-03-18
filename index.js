const express=require(express);
require("dotenv").config();
const app=express();

app.get("/",(req,res)=>{
    res.send("Welcome to server 1")
})

app.listen(process.env.port,()=>{
    console.log(`Server is running at port ${process.env.port}`);
})