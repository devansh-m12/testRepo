import mongoose from "mongoose";
import express from "express";
const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const connectDB = async () => {
    try{
        const db = await mongoose.connect("mongodb://localhost:27017/testDb");
        console.log("DB is Connected");
    }
    catch (e){
        console.log(e);
        process.exit(1);
    }
}

connectDB().then(()=>{
    app.listen(8000,()=>{
        console.log("app is running");
    })
    app.on("error",(e)=>{
        console.log("server error", e);
    })
}).catch((err)=>{
    console.log("error while connecting db");
});


app.get("/",(req,res)=>{
    res.send("app is running");
})


import router from "./routes/index.js";

app.use("/api",router);

