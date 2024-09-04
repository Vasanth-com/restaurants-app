import foodModel from "../models/foodmodel.js";
import HttpError from '../models/errormodel.js'
import {v4 as uuid} from 'uuid'
import path from 'path'
import fs from 'fs'

const addFoods = async(req,res,next) =>{
    try {
        let {title,description,image,price,rating,quantity} = req.body;
        const food =  new foodModel({
            title:title,
            description:description,
            image:image,
            price:price,
            rating:rating,
            quantity:quantity
        })
        
        try {
            await food.save();
            res.status(200).json({message:"Food Added"})
        } catch (error) {
            return next(new HttpError(error))
        }

    } catch (error) {
        return next(new HttpError(error))
    }
}

const getFoods = async(req,res,next)=>{
    try {
        const foods = await foodModel.find({});
        res.status(200).json({data:foods})
    } catch (error) {
        return next(new HttpError(error))
    }
}

export {addFoods,getFoods}