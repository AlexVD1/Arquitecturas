import dbClient from "../config/dbClient.js"; 
import { ObjectId } from "mongodb";

class tasksModel {

    async createTask(taskData) {
        const colTasks = dbClient.db.collection('tasks');
        return await colTasks.insertOne(taskData); 
    }

    async getAllTasks(){
        const colTasks = dbClient.db.collection('tasks');
        return await colTasks.find({}).toArray();
    }

    async getTaskById(id){
        const colTasks = dbClient.db.collection('tasks');
        return await colTasks.findOne({ _id: new ObjectId(id) });
    }

    async updateTask(id, taskData) {
        const colTasks = dbClient.db.collection('tasks');
        return await colTasks.updateOne({ _id: new ObjectId(id) }, { $set: taskData });
    }

    async deleteTask(id) {
        const colTasks = dbClient.db.collection('tasks');
        return await colTasks.deleteOne({ _id: new ObjectId(id) });
    }
}

export default new tasksModel;