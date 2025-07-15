import React from "react";
import Cards from "./card";
import tours from "../data";

function Tours({tours, BtnHandler}){
    return(
    <div className="container">
        <div>
            <h2>
                Plan with Love
            </h2>
        </div>
        <div className="cards">
            {
                tours.map((tours)=>{
                    return <Cards key={tours.id} {...tours} BtnHandler={BtnHandler}/>
                })
            }
        </div>
    </div>
    )
    
}

export default Tours;