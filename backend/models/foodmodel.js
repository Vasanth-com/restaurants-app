import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    rating:{type:Number,required:true},
    quantity:{type:Number,required:true}
})

const foodModel = mongoose.models.foods || mongoose.model('foods',foodSchema)

export default foodModel