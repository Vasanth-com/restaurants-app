import mongoose from "mongoose"

export const connectDB = async() =>{
        await mongoose.connect('mongodb+srv://vasanth:vasanth2519@cluster0.zkxkka3.mongodb.net/restro')
        .then(()=>console.log("DB Connected..!"))
        .catch((err)=>{
                console.log(err);
        })
}


