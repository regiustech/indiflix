import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    userName: { type: String, required: true },
    userImage: { type: String },
    rating: { type: Number, required: true },
    comment: { type: Number, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
},
    {
        timestamp: true,
    }
);


const moviesSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    contentType: {
        type: String
    },
    audioQuality: {
        type: String
    },
    videoQuality: {
        type: String
    },
    price: {
        type: String
    },
    language: {
        type: String
    },
    dubbing: {
        type: String
    },
    genre: {
        type: String,
    },
	
    inCertified: {
        type: String,
    },
    cetrificationName: {
        type: String
    },
    certificationFiles: {
        type: String,
    },
    language: {
        type: String,
    },
    
	videofile: {
        type: String,
        //rquired:true,
    },
	
	videoposter: {
        type: String,
        //rquired:true,
    },
	
	is_buy: {
        type: Boolean,
        default: false,
    },
	
	
	
    stars: {
        type: Number,
        rquired: true,
        default: 0
    },
    
	contentType_duration_resolution_priceEvery3Months: {
        type: String,
        rquired:true,
    },
	 
	
	
	numberofReviews: {
        type: Number,
        rquired: true,
        default: 0
    },
    reviews: [reviewSchema],
},
    {
        timestamp: true,
    }

);


export default mongoose.model("Movies", moviesSchema);
