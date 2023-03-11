import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const handler=(req, res)=>{

    mongoose.connect("mongodb://127.0.0.1:27017/hangoutDB");

    const hangoutSchema = new mongoose.Schema({
        image:{
            type: String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        }
    });

    //const Hangout = mongoose.model("Hangout", hangoutSchema);
    const Hangout = mongoose.models.Hangout || mongoose.model("Hangout", hangoutSchema);
    const hangoutItem = new Hangout({
            image:req.body.image,
            title:req.body.title,
            address:req.body.address
        });
    
        hangoutItem.save();
    
}

export default handler;