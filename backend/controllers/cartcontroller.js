import HttpError from "../models/errormodel.js";
import userModel from "../models/usermodel.js";

const addToCart = async(req,res,next) =>{
    console.log(req.body.userId);
    
    try {
        let userData = await userModel.findById({_id:req.body.userId})
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else {
            cartData[req.body.itemId] +=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        return res.status(200).json({success:true,message:"Added to cart"})
    } catch (error) {
        return next(new HttpError(error))
    }
}

const removeFromCart = async(req,res,next) =>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.status(200).json({message:"Remove from cart"})
    } catch (error) {
       return next(new HttpError(error))   
    }
}

const getCart = async(req,res,next)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.status(200).json({message:cartData})
    } catch (error) {
        return next(new HttpError(error))
    }
}

export {addToCart,removeFromCart,getCart}