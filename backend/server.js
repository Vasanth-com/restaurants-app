import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js';
import "dotenv/config.js"
import userRouter from './routes/userroutes.js';
import { errorHandler, notFound } from './models/errormiddleware.js';
import foodRouter from './routes/foodroutes.js';
import cartRouter from './routes/cartroutes.js';


//app config
const app = express();
const port = 4000;

//middleware

app.use(express.json());
app.use(cors());

// db connection

connectDB();

// api endpoints
app.use('/images',express.static("uploads"))
app.use('/api/user',userRouter)
app.use('/api/foods',foodRouter)
app.use('/api/cart',cartRouter)

app.use(notFound)
app.use(errorHandler)

app.use('/',(req,res)=>{
    res.send("API Working..!")
})


app.listen(port,()=>{
    console.log(`Server running port on http://localhost:${port}`);
    
})