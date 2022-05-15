import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const PORT = process.env.PORT || 3002;

const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
});