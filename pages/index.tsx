import React from "react";
import mongoose from "mongoose";
import Head from "next/head";
import hangoutMasterList from "../public/hangoutMasterList";
import HangoutList from "../components/hangouts/HangoutList";

const Hangouts= (props)=>{

    //console.log(props.listOfHangouts);

    return (
        <React.Fragment>
            <Head>
                <title>React Hangout Events</title>
                <meta
                    name="description"
                    content="This is page built using React and Nextjs" />
            </Head>
            <HangoutList hangouts={JSON.parse(props.listOfHangouts)}/>
        </React.Fragment>
    ) 
}

export default Hangouts;

export async function getStaticProps(){

    await mongoose.connect("mongodb://127.0.0.1:27017/hangoutDB");
    /*
    const Hangout = mongoose.models.Hangout || mongoose.model("Hangout", new mongoose.Schema({
        image:String,
        title:String,
        address:String
    }));
    */

    const Hangout = mongoose.model("Hangout", new mongoose.Schema({
        image:String,
        title:String,
        address:String
    }));

    const respData = await Hangout.find({}, {});
    
    return {
        props:{listOfHangouts:JSON.stringify(respData)}, 
        revalidate:3600 //Refresh every hour
    }
}