import mongoose from 'mongoose';
import environment from '../../config/environments.js'

const MONGODB_URL = environment.MONGODB_URL;

const connectToMongodb = async () => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log('MongoDB database connected!')
    } catch (err) {
        console.log('MongoDB database connection error!');
        process.exit(1);
    }
}
export default connectToMongodb;