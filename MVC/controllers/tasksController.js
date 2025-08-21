import tasksModel from '../models/taskModel.js';

class tasksController{
    constructor(){}

    async create(req,res){
        const taskData= await tasksModel.createTask(req.body);
        res.status(201).send(taskData);
    }
    async getAll(req,res){
        const taskData= await tasksModel.getAllTasks(req.body);
        res.status(201).send(taskData);
    }
    async getOne(req,res){
        const {id} = req.params; // Assuming the ID is passed as a URL parameter
        const taskData= await tasksModel.getTaskById(id);
        res.status(201).send(taskData);
    }

    async update(req,res){
        const {id} = req.params; 
        const taskData= await tasksModel.updateTask(id, req.body);
        res.status(201).send(taskData);
    }

    async delete(req,res){
       const {id} = req.params; 
        const taskData= await tasksModel.deleteTask(id, req.body);
        res.status(206).send(taskData); 
    }

    
}
export default new tasksController();