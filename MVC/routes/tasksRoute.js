import express from 'express';
import tasksController from '../controllers/tasksController.js';
import { verifyToken } from '../helpers/authentication.js';

const router =express.Router();

router.post('/',verifyToken,tasksController.create);
router.get('/:id',tasksController.getOne);
router.get('/',tasksController.getAll);
router.put('/:id',verifyToken,tasksController.update);
router.post('/delete/:id',verifyToken,tasksController.delete);

router.get('/user/:id', verifyToken,tasksController.getUserTasks);

export default router;