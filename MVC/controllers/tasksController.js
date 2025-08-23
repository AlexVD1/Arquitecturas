import tasksModel from '../models/taskModel.js';

class tasksController{
    constructor(){}

    async create(req,res){
       try {
            const {user_id, title, description, category, status} = req.body;
            const taskData= await tasksModel.createTask({user_id, title, description, category, status} );
            res.status(201).send(taskData);
       } catch (error) {
            next(error); // Pass the error to the error handling middleware
       }
    }
    async getAll(req,res){
        try {
            const taskData= await tasksModel.getAllTasks(req.body);
            res.status(201).send(taskData);
        } catch (error) {
            next(error); // Pass the error to the error handling middleware
       }
    }
    async getOne(req,res){
        try {
            const {id} = req.params; // Assuming the ID is passed as a URL parameter
            const taskData= await tasksModel.getTaskById(id);
            res.status(201).send(taskData);
        } catch (error) {
            next(error); // Pass the error to the error handling middleware
       }
    }

    async update(req,res){
        try {
            const {user_id, title, description, category, status} = req.body;
            const {id} = req.params; 
            const taskData= await tasksModel.updateTask(id, {user_id, title, description, category, status} );
            res.status(201).send(taskData);
        } catch (error) {
            next(error); // Pass the error to the error handling middleware
       }
    }

    async delete(req,res){
       try {
            const {id} = req.params; 
            const taskData= await tasksModel.deleteTask(id, req.body);
            res.status(206).send(taskData); 
        } catch (error) {
            next(error); // Pass the error to the error handling middleware
       }
    }

    
}
export default new tasksController();