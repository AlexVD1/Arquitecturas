import Task from '../schemas/taskScheme.js';
import mongoose from 'mongoose';

class tasksModel {

    async createTask(taskData) {
       return await Task.create(taskData);
    }

    async getAllTasks(){
        return await Task.find();
    }

    async getTaskById(id){
        return await Task.findById({_id: new mongoose.Types.ObjectId(id)});
    }

    async updateTask(id, taskData) {
        return await Task.findByIdAndUpdate({_id: new mongoose.Types.ObjectId(id)}, taskData, { new: true });
    }

    async deleteTask(id) {
        return await Task.findByIdAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }
}

export default new tasksModel;