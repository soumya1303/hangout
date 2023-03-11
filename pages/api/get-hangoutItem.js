import mongoose from "mongoose";

const handler = async (req, res)=>{
    
    mongoose.set("strictQuery", true);
    
    await mongoose.connect("mongodb://127.0.0.1:27017/hangoutDB");

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

    const Hangout = mongoose.models.Hangout || mongoose.model("Hangout", hangoutSchema);

    const hangoutId = req.body.id;

    const resp = await Hangout.findById(hangoutId).exec;

    console.log(`resp is ${resp}`);

    const respSerialised = await resp.json();

    console.log(`respSerialised is ${respSerialised}`);
    
    res.send(respSerialised);

}

export default handler;



