import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../helpers/authentication.js';


class usersController{
    constructor(){}

    async register(req,res){
       try {
            const {name, phone, email, password} = req.body;
            
            const existingUser=await userModel.getOne({email});
            if(existingUser){
                return res.status(400).send({error:'User already exists'});
            }

            const hashedPassword= await bcrypt.hash(password,10);

            const userData= await userModel.createUser({
                name, 
                phone, 
                email, 
                password: hashedPassword
            });

            res.status(201).json(userData);
       } catch (error) {
            console.log( error);
            next(error); // Pass the error to the error handling middleware
       }
    }

    async login(req,res){
        try{
            const {email,password}=req.body;
            
            const existingUser=await userModel.getOne({email});
            if(!existingUser){
                return res.status(400).json({error:'User not found'});
            }

            const isPasswordValid = await bcrypt.compare(password,existingUser.password);

            if(!isPasswordValid){
                return res.status(400).json({error: 'Invalid password'});
            }

            const token= generateToken(email);


            return res.status(200).json({message:'Login successful',token});
        }
        catch(error){
            console.log(error);
            next(error); // Pass the error to the error handling middleware
        }
    }

    async profile(req,res){
            try {
                const userData= await userModel.getOne({email: req.emailConnected});
                res.status(201).send(userData);
            } catch (error) {
                next(error); // Pass the error to the error handling middleware
           }
        }
    
}
export default new usersController();