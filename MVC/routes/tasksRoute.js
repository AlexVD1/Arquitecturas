import express from 'express';
import tasksController from '../controllers/tasksController.js';
const router =express.Router();

router.post('/',tasksController.create);
router.get('/:id',tasksController.getOne);
router.get('/',tasksController.getAll);
router.put('/:id',tasksController.update);
router.delete('/:id',tasksController.delete);

export default router;