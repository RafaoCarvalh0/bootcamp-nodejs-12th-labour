import dotenv from "dotenv";
dotenv.config()
import mongoose from "mongoose";

async function connect() {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`
    return await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export  { connect };