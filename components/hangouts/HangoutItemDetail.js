import React from "react";
import classes from "./HangoutItemDetail.module.css";

const HangoutItemDetail = (props)=>{

    console.log(props.hangoutItem);
    
    return (
        <section className={classes.detail}>
                <div >
                    <img src={props.hangoutItem.image} alt={props.hangoutItem.title} />
                    </div>
                    <div >
                    <h3>{props.hangoutItem.title}</h3>
                    <address>{props.hangoutItem.address}</address>
                </div>
        </section>
    )
    

}

export default HangoutItemDetail;





   /*
    return (
        <section className={classes.detail}>
                <div >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg" 
                         alt="Munich Town Hall" />
                    </div>
                    <div >
                    <h3>Munich Town Hall</h3>
                    <address>Marienplatz 8, 80331 München, Germany</address>
                </div>
        </section>
    )
    */