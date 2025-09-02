import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../helpers/authentication.js';
import passwordEncrypter from '../helpers/passwordEncrypter.js';


class usersController{
    constructor(){}

    async register(req,res){
       try {
            const {name, phone, email, password} = req.body;
            
            const existingUser=await userModel.getOne({email});
            if(existingUser){
                return res.status(400).render("register",{error:'User already exists'});
            }

            const hashedPassword= await passwordEncrypter.encrypt(password);

            const userData= await userModel.createUser({
                name, 
                phone, 
                email, 
                password: hashedPassword
            });

            res.redirect('/users/login');
       } catch (error) {
            console.error(error); // Pass the error to the error handling middleware
       }
    }

    async registerView(req,res){
        res.render("register",{user:null});
    }

    async login(req,res){
        try{
            const {email,password}=req.body;
            
            const existingUser=await userModel.getOne({email});
            if(!existingUser){
                return res.status(400).render("login",{error:'User not found'});
            }

            const isPasswordValid = await passwordEncrypter.compare(password, existingUser.password);

            if(!isPasswordValid){
                return res.status(400).render("login",{error: 'Invalid password'});
            }

            const token= generateToken(existingUser._id);
            res.cookie('token',token,{httponly:true});

            res.redirect('/users/profile');
        }
        catch(error){
            console.log(error);
            console.error(error); // Pass the error to the error handling middleware
        }
    }

    async profile(req,res){
            try {
                const userData= await userModel.getUserById(req.idConnected);
                res.status(201).render("profile",{user:userData});
            } catch (error) {
                console.error(error); // Pass the error to the error handling middleware
           }
        }

    async loginView(req,res){
        res.render("login",{user:null});
    }

    async logout(req,res){
        res.clearCookie('token');
        res.redirect('/users/login');
    }
    
}
export default new usersController();