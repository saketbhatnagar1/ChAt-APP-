import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";


export const signup = async (req,res)=>{
    const {fullName,email,password} = req.body

    try{

        if(!fullName || !email || !password){
            return res.status(400).json({message:"All fields must eb filled"})
        }
        if (password.length<6){
             return res.status(400).json({ message: "Password must be at least 6 characters" });

        }
        const user = await User.findOne({email})
        if (user) return res.status(400).json({message: "Email Already exists"})
        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt); 

        const newUser = new User({
            fullName,
            email,
            password:hashedPassword
        })
        if (newUser){
            generateToken(newUser._id,res)
            await newUser.save()
            res.status(201).json({
                _id:newUser._id,
                fullName: newUser.fullName,
                email:newUser.email,
                profilePic:newUser.profilePic

            })
        } else{
            res.send(400).json({message:"Invalid user data"})
        }

    }
    catch(e){
        console.log(`error in signup controller ${e.message}`)
        res.status(500).json({message:"Internal server error"});
    }









    
};



export const login = async (req,res) =>{
    //todo: Handle case where user is already logged in 
    const {email,password} = req.body
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "invalid credentials"})
        }
       const isPasswordCorrect =  await bcrypt.compare(password,user.password)
        if (!isPasswordCorrect)
        {
            return res.status(400).json({message:"Invalid Credentials"});
        }
        generateToken(user._id,res)
        res.status(200).json({
            message:"login success",
            _id:user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
        })
    
    }catch(e){
        console.log("Error in login controller ",error.message)

    }

};



export const logout = (req,res) =>{
    //clear cookies:
    try{
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"logged out successfully"});
    }
    catch(error){
        console.log("error in log out controller",error.message)
        res.status(500).json({message:"Internal server error"});
    }

    res.send("logout");
};


export const updateProfile = async (req, res) => {
    try {
      const { profilePic } = req.body;
      const userId = req.user._id;
  
      if (!profilePic) {
        return res.status(400).json({ message: "Profile pic is required" });
      }
  
      const uploadResponse = await cloudinary.uploader.upload(profilePic);
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { profilePic: uploadResponse.secure_url },
        { new: true }
      );
  
      res.status(200).json(updatedUser);
    } catch (error) {
      console.log("error in update profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  export const checkAuth = (req, res) => {
    try {
      res.status(200).json(req.user);
    } catch (error) {
      console.log("Error in checkAuth controller", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };


console.log("HELLO from auth controller")

//comment for commit for backend setup