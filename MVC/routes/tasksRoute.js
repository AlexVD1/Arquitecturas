import express from 'express';
import tasksController from '../controllers/tasksController.js';
import { verifyToken } from '../helpers/authentication.js';

const router =express.Router();

router.post('/',tasksController.create);
router.get('/:id',tasksController.getOne);
router.get('/',tasksController.getAll);
router.put('/:id',verifyToken,tasksController.update);
router.delete('/:id',verifyToken,tasksController.delete);

export default router;