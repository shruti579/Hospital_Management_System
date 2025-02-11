import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"HOSPITAL_MANAGEMENT_SR"
    }).then(()=>{
        console.log("connected to database")
    }).catch((err)=>{
        console.log(`some error occured with connecting to database:${err}`);
    });
}