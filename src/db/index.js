import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


const connectDB = async() =>{
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('connection established !!!! \n')
        console.log(connection.connection.host)
    } catch (error){
        console.error(`ERROR : ${error}`)
        process.exit(1)
    }
}

export default connectDB