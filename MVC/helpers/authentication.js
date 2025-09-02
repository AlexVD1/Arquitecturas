import jwt from 'jsonwebtoken';
import 'dotenv/config.js';

export function generateToken(userId){
    return jwt.sign({id: userId.toString()},process.env.JWT_SECRET,{expiresIn: '1h'});
}

export function verifyToken(req,res,next) {
    
    const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ',''); //Obtiene token de la cookie o del header Authorization

    if(!token){
        return res.status(401).send('Access denied. No token provided.');
    }
    
    try{
        const verifiedToken = jwt.verify(token,process.env.JWT_SECRET);
        if(verifiedToken){
            req.idConnected=verifiedToken.id; 
            return next(); // Call the next middleware or route handler
        }
    }
    catch(error) {
        console.log('Invalid token, please log in again.');
        return res.status(400).redirect('/users/login');
    }
    

    res.status(401).send('Unauthorized');
}