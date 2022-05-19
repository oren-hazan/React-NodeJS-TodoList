import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors'
import environments from '../config/environments.js';
import connectToMongodb from './databases/mongoose.db.js';
import userRouter from './routers/user.router.js'

dotenv.config();


const PORT = environments.PORT || 3002;

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter);

app.listen(PORT, async () => {
    console.log(`Server is running on port: ${PORT}`)
 await connectToMongodb();
});