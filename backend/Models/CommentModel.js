import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    review_id:{
        type:mongoose.Schema.ObjectId,
        required: true,
    },

    user_id:{
        type:mongoose.Schema.ObjectId,
        required: true,
    },
    comment_text:{
        type:String,
        required: true,
    },
    
},
{
    timeStamps:true,
}
);

export default mongoose.model("comment",CommentSchema);
