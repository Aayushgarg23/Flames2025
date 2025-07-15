import React from "react";

function Cards({id, image, price, name, info, BtnHandler}){
return(
    <>
    <div className="card">
    <img src={image} className="image"/>
    <div className="tour-info">
        <div>
            <h4 className="tour-price"> ${price} </h4>
            <h4 className="tour-name">{name}</h4>
        </div>

        <div>
            {info}
            <span className="read-more">
                readmore
            </span>
        </div>
    </div>
    <button onClick={()=>BtnHandler(id)} className="btn-red">Not interested</button>
    </div>
    </>
)
}

export default Cards;