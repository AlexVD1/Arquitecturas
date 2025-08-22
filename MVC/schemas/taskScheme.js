import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
    user_id: {
        type : String, required: true
    },
    title: {
        type : String, required: true
    },
    description: {
        type : String, required: true
    },
    category: {
        type : String, required: true, default: 'Others' ,enum:['Routine','Monitoring','Maintenance','Projects','Incidents','Development','Analysis','Others']
    },
    status: {
        type : String, required: true, default: 'Not Started', enum: ['Not Started', 'In Progress', 'Completed','On Hold', 'Cancelled', 'Deferred' , 'Waiting for Review']
    }
},{timestamps:true});

export default mongoose.model('tasks', taskSchema);