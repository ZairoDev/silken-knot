import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
        name: { type: String, required: true },
        email:{type:String,required:true},
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
    });
    
    export const Review =
        mongoose.models.Review || mongoose.model("Review", reviewSchema);