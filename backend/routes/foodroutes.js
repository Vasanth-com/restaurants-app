import express from 'express'
import { addFoods,getFoods } from '../controllers/foodcontroller.js'
import multer from 'multer'

const foodRouter = express.Router();

// image storage

// const storage = multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,cb)=>{
//         return cb(null,`${Date.now()} ${file.originalname}`)
//     }
// })


// const upload = multer({storage:storage})

foodRouter.post('/add',addFoods)
foodRouter.get('/list',getFoods)



export default foodRouter