import express from 'express';
import usersController from '../controllers/usersController.js';
import { verifyToken } from '../helpers/authentication.js';

const router =express.Router();

router.post('/register',usersController.register);
router.get('/login',usersController.loginView);
router.post('/login',usersController.login);
router.get('/profile',verifyToken, usersController.profile); 
router.get('/logout',usersController.logout);
router.get('/register',usersController.registerView);
router.post('/register',usersController.register);

export default router;