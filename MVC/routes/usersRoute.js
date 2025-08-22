import express from 'express';
import usersController from '../controllers/usersController.js';
import { verifyToken } from '../helpers/authentication.js';

const router =express.Router();

router.post('/register',usersController.register);
router.post('/login',usersController.login);
router.get('/profile',verifyToken, usersController.profile); 

export default router;