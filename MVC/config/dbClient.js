import mongoose from "mongoose";

class dbClient {
  constructor(){
    this.connectDB();
  }

    //Metodo para conectar la base de datos
    async connectDB() {
        try {
            const queryString= `mongodb+srv://${process.env.USERMONGODB}:${process.env.PASSMONGODB}@${process.env.SERVERMONGODB}/taskControl?retryWrites=true&w=majority`;
            await mongoose.connect(queryString);
            console.log("Connected from MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    }

    //Metodo para desconectar la base de datos
   async disconnectDB() {
        try {
            await mongoose.disconnect();
            console.log("Disconnected from MongoDB");
          }
          catch (error) {
            console.error("Error disconnecting from MongoDB:", error);
          }
    }

}

export default new dbClient();
