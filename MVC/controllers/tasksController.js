import tasksModel from '../models/taskModel.js';
import userModel from '../models/userModel.js';

class tasksController{
    constructor(){}

    async create(req,res){
       try {
        const user = await userModel.getUserById(req.idConnected);
        const user_id = user._id; // Assuming the user object has an _id field

        const { title, description, category, status} = req.body;
        await tasksModel.createTask({user_id, title, description, category, status} );

        res.reload('/users/profile');
       } catch (error) {
        console.log(error);
            console.error(error); // Pass the error to the error handling middleware
       }
    }
    async getAll(req,res){
        try {
            const taskData= await tasksModel.getAllTasks(req.body);
            res.status(201).send(taskData);
        } catch (error) {
            console.error(error); // Pass the error to the error handling middleware
       }
    }
    async getOne(req,res){
        try {
            const {id} = req.params; // Assuming the ID is passed as a URL parameter
            const taskData= await tasksModel.getTaskById(id);
            res.status(201).send(taskData);
        } catch (error) {
            console.error(error); // Pass the error to the error handling middleware
       }
    }

    async update(req,res){
        try {
            const {user_id, title, description, category, status} = req.body;
            const {id} = req.params; 
            const taskData= await tasksModel.updateTask(id, {user_id, title, description, category, status} );
            res.status(201).send(taskData);
        } catch (error) {
            console.error(error); // Pass the error to the error handling middleware
       }
    }

    async delete(req,res){
       try {
            const {id} = req.params; 
            await tasksModel.deleteTask(id);
            res.status(206).redirect('/users/profile'); 
        } catch (error) {
            console.error(error); // Pass the error to the error handling middleware
       }
    }

    async getUserTasks  (req, res, next) {
        try {
            const user = await userModel.getUserById(req.idConnected);

            const tasks = await tasksModel.getTasksByUser( user._id);

            if(!tasks || tasks.length ===0){
                if(!user) {
                    return res.render("tasks",{user:null,tasks:[]});
                }
                return res.render("tasks",{user,tasks:[]});
            }

            res.render("tasks",{user,tasks});
        } catch (error) {
            console.error(error);
        }
    }


}
export default new tasksController();