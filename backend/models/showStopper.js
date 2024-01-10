import mongoose from "mongoose";

const ShowStopperSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    date: {
        type: Date,
        default: Date.now,
    },
    regBy:String,
    regbyEmail:String,
    name:String,
    clgName:String,
    contact_phone:String,
    aud_link:String,
    vid_link:String,
    payment_link:String
});

const ShowStopper = mongoose.model('ShowStopper', ShowStopperSchema);

export default ShowStopper;
