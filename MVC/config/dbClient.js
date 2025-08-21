import { MongoClient } from "mongodb";

class dbClient {
    constructor() {
        const queryString= `mongodb+srv://${process.env.USERMONGODB}:${process.env.PASSMONGODB}@${process.env.SERVERMONGODB}/?retryWrites=true&w=majority&appName=Cluster0`;
        this.client =new MongoClient(queryString);
        this.connectDB('taskControl');
    }

    async connectDB(){
        try{
            await this.client.connect();
            this.db=this.client.db('taskControl');
            console.log("Connected to the database ");
        }
        catch(err){
            console.error("Error connecting to the database:", err);
        }
        finally {
            // Ensures that the client will close when you finish/error
             //await this.client.close();
             //console.log("Disconnected to the database ");
        }   
    }
}

export default new dbClient();

/*
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://villafrancodesiderio:<db_password>@cluster0.5ebrrio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
*/