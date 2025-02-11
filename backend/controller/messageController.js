import { Message } from "../models/messageSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import  ErrorHandler from "../middlewares/errorMiddleware.js"

export const sendMessage= catchAsyncErrors(async(req,resp,next)=>{
    const{firstName,lastName,email,phone,message}=req.body;
    if(!firstName || !lastName || !email || !phone || !message){
        return next(new ErrorHandler("Please Fill Full Form!",400))
        // resp.status(400).json({
        //     success:false,
        //     message:"Please Fill Full Form",
        // });
    }
    await Message.create({firstName,lastName,email,phone,message});
    resp.status(200).json({
        success:true,
        message:"Message Send Succesfuly",
    });
})

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
    const messages = await Message.find();
    res.status(200).json({
      success: true,
      messages,
    });
  });