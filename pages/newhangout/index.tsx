import React from "react";
import { useRouter } from 'next/router';
import NewHangoutForm from "../../components/hangouts/NewHangoutForm";


const NewHangout=()=>{

    const router = useRouter();

    const handleSubmission = async (formObject)=>{
        
        const resp = await fetch("/api/new-hangout", {
            method:"POST",
            body:JSON.stringify(formObject),
            headers:{"Content-Type":"application/json"}
        });
        if (!resp.ok){
            throw new Response(JSON.stringify({errCode:404, errText:"Failed to save data"}));
        }
        else{
            const respData = await resp.json();
            //console.log(`respData is ${respData}`);
            router.push("/");
        }
    }

    return <NewHangoutForm onSubmission={handleSubmission}/> 
}

export default NewHangout;  