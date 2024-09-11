const express = require("express");
const mongoose= require("mongoose");
const bodyParser= require("body-parser");
const cors= require("cors");
const dotenv= require("dotenv");
const app=express();
require("dotenv").config();

const PORT= process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
const url=process.env.MONGODB_URL;
mongoose.connect(url)

    const Connection= mongoose.connection;
    Connection.once("open",()=>{
        console.log("MongoDb connection sucssesfull");
    })


    const userRout=require("./routs/userRout.js")
    app.use("/user",userRout);

    app.listen(PORT,()=>{
        console.log(`Server is up and running on ${PORT}`);
    })