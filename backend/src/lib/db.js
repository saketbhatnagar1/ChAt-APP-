import mongoose from "mongoose";


const MONGO_URI = "mongodb+srv://saketbhatnagar2:bmwm340i!@cluster0.bunwk.mongodb.net/chats_db?retryWrites=true&w=majority&appName=Cluster0"


export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`Mongo DB connected : ${conn.connection.host}`)

    }catch(error){
        console.log(`connectDB error: ${error.message}`)
        
    }
};


console.log("HELLO from db ")

//comment for commit for backend setup
//comment for commit for backend setup