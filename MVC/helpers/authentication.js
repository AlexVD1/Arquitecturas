import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

export function generateToken(email){
    return jwt.sign({email},process.env.JWT_SECRET,{expiresIn: '1h'});
}

export function verifyToken(req,res,next) {
    const token = req.header('Authorization')?.replace('Bearer ','');

    if(!token){
        return res.status(401).send('Access denied. No token provided.');
    }
    
    try{
        const verifiedToken = jwt.verify(token,process.env.JWT_SECRET);
        if(verifiedToken){
            req.emailConnected=verifiedToken.email; 
            return next(); // Call the next middleware or route handler
        }
    }
    catch(error) {
        return res.status(400).send('Invalid token');
    }
    

    res.status(401).send('Unauthorized');
}