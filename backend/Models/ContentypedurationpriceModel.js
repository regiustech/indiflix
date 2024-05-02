import mongoose from "mongoose";


const contentTypeDurationPrice = mongoose.Schema({
    
    content_type: {
        type: String
        
    },
    descDuration : {
        type: Number
    },
    resolution: 
    {
        type: String
    },
    price_every_3months:
    {
        type: Number
    },
    
});


export default mongoose.model("content_type_duration_price", contentTypeDurationPrice);