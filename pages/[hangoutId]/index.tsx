import React from "react";
//import { useRouter } from "next/router";
//import mongoose from "mongoose";
import {MongoClient, ObjectId} from "mongodb";
import hangoutMasterList from "../../public/hangoutMasterList";
import HangoutItemDetail from "../../components/hangouts/HangoutItemDetail";


const HangoutItemPage = (props)=>{
    //console.log(`props.hangoutItem is ${props.hangoutItem}`);
    return <HangoutItemDetail hangoutItem={JSON.parse(props.hangoutItem)}></HangoutItemDetail>            
}

export default HangoutItemPage;

export async function getStaticPaths(){
    return({
        paths:[
            {params:{hangoutId:"640a65bec66734e03bc191b1"}
            },
            {params:{hangoutId:"640a66d7951233cecb49ffd8"}
            },
            {params:{hangoutId:"640a6c39d1ce3b9d4bb43cce"}
            },
            {params:{hangoutId:"640a6c9dd1ce3b9d4bb43cd1"}
            },
            {params:{hangoutId:"640cb08fe1d0c57425950558"}
            },
            {params:{hangoutId:"640cbbf806b688bd39cd0acb"}
            }
        ],
        fallback:false
    })
}

export async function getStaticProps(context){

    const client = await MongoClient.connect("mongodb://127.0.0.1:27017/");    
    
    const hangoutItemId = new ObjectId(context.params.hangoutId);
    
    const db = client.db("hangoutDB");
    
    const collection = db.collection("hangouts");

    const hangoutItem = await collection.findOne({_id: hangoutItemId});

    return({
        props:{
            hangoutItem:JSON.stringify(hangoutItem)
        }
    })

}