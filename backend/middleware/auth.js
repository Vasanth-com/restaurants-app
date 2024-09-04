import jwt from 'jsonwebtoken';
import HttpError from '../models/errormodel.js';


const authMiddleware = async(req,res,next) =>{
    const Authorization = req.headers.Authorization || req.headers.authorization;
    if(Authorization && Authorization.startsWith("Bearer")){
      try {
        let token = Authorization.split(' ')[1]
        if(!token){
            return next(new HttpError("Not Authorized",422));
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id
        next();
      } catch (error) {
        return next(HttpError(error))
      }
        
    } else {
        return next(new HttpError("Unauthorized No token.."),402)
    }
}


export default authMiddleware