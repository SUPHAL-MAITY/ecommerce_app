import  express from "express";
import dotenv from "dotenv"


///configure env
dotenv.config()

///rest object
const app=express();


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
