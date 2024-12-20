import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://shubham:789456@cluster0.r82aq.mongodb.net/resturant').then(()=>console.log("DB Connected")
    )
}