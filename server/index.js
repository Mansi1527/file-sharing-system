import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';
import dbconnection from "./database/db.js";

const app=express();
app.use(cors(
    {
        origin: [
            "http://localhost:3000",  // for local development
            "https://your-app-name.vercel.app"  // for production after deploying
        ],
        methods:["POST","GET"],
        credentials:true
    }
));
app.use('/',router);
const PORT =8000;
dbconnection();
app.listen(PORT,()=>console.log(`server running at ${PORT}`));//()=>is a call back funtion
