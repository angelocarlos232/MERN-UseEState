import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Mongodb connected")
}).catch(() => {
    console.log("Mongodb not connected")
})

const app = express();

app.use(express.json())
app.use("/api/user", userRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

