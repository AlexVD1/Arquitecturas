import User from '../schemas/userSchema.js';
import mongoose from 'mongoose';

class usersModel {

    async createUser(userData) {
       return await User.create(userData);
    }

    async getAllUsers(){
        return await User.find();
    }

    async getUserById(id){
        return await User.findById({_id: new mongoose.Types.ObjectId(id)});
    }

    async getOne(filter){
        return await User.findOne(filter);
    }

    async updateUser(id, userData) {
        return await User.findByIdAndUpdate({_id: new mongoose.Types.ObjectId(id)}, userData, { new: true });
    }

    async deleteUser(id) {
        return await User.findByIdAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }
}

export default new usersModel;