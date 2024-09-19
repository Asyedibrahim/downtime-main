import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import websiteRouter from '../api/routes/website.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then( () => {
    console.log("Connect to MongoDB");
}).catch( (err) => {
    console.log(err);
});

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
});

app.use('/api/website',websiteRouter);