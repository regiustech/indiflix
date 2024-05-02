import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    movie_id:{
        type:mongoose.Schema.ObjectId,
        required: true,
    },

    user_id:{
        type:mongoose.Schema.ObjectId,
        required: true,
    },

    rating:{
        type:Number,
        required: true,
    },

    review_text:{
        type:String,
        required: true,
    },
    
    
},
{
    timeStamps:true,
}
);

export default mongoose.model("review",ReviewSchema);
