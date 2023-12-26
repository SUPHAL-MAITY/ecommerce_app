import  express from "express";
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"



///configure env
dotenv.config()



///database config
connectDB();

///rest object
const app=express();



///middlewares
app.use(express.json())
app.use(morgan("dev"))


//end point
app.get("/",(req,res)=>{
    res.send(
        "<h1>Welcome to Ecommerce App</h1>"
    )
})

const PORT= process.env.PORT;

//app listen
app.listen(PORT,()=>{
    console.log(`server running on https://localhost:${PORT} `)
})
