import User from "../models/userModel.js";
import bcryptjs from 'bcrypt'



export const signup = async (req,res, next) => {

    const {username, email, password,repeat_password} = req.body;


    if(repeat_password != password){
        res.status(203).json("Passwords do not match")
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);


    const newUser = new User({username, email, password:hashedPassword});
    try {
        await newUser.save();
        res.status(201).json("User created successfully")
    } catch (error) {
        next(error)
    }
}