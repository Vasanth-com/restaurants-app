import { registerValid,loginValid } from "../middleware/errorhandler.js"; 
import userModel from "../models/usermodel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import HttpError from '../models/errormodel.js'

const register = async (req,res,next) =>{
    console.log(req.body);
    try {
        const {name,email,password} = req.body;
        
        const errorMessage = registerValid(name,email,password);
        if(errorMessage) {
            return res.status(400).json({message:errorMessage});
        }
        const newEmail = email.toLowerCase();
        const emailExits = await userModel.findOne({email:newEmail});
        if(emailExits){
            return next(new HttpError("Email Already Exists",422))
        }
        if(password.trim() < 6){
            return res.status(422).json({message:errorMessage})
        }

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password,salt);
        const newUser =  await userModel.create({name,email:newEmail,password:hashPass});
        console.log(newUser);
        res.status(200).json(`New User ${newUser.email} registered`)
    } catch (error) {
        return next(new HttpError("User Registration failed..!",422))
    }
}


const login = async(req,res,next) =>{
    try {
        const {email,password} = req.body;
        const errorMessage = loginValid(email,password);
        if(errorMessage){
            return res.status(400).json({message:errorMessage});
        }
        const newEmail = email.toLowerCase();

        const user = await userModel.findOne({email:newEmail});
        if(!user){
            return next(new HttpError("Invalid credentials",422))
        }

        const comparedPass = await bcrypt.compare(password,user.password);
        
        if(!comparedPass){
            return next(new HttpError("Password Doesn't match..!",422))
        }

        const {_id:id,name} = user;
        const token = jwt.sign({id,name},process.env.JWT_SECRET , {expiresIn:'1d'})
        return  res.status(200).json({token,id,name})
    } catch (error) {
        return next(new HttpError("Login failed. Please check your credentials..!",422))
    }
}

export {register,login}