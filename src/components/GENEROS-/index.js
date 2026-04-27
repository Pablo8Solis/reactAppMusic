import React from "react";
const CardsGen = ({nameOfGen, srcOfImgGen, altOfImgGen}) =>{
    return(
        <section className= "cards-gen">
            <img src={`${srcOfImgGen}`} alt={`${altOfImgGen}`}/>
            <p>{nameOfGen}</p> 
        </section>
        )
    }

export default CardsGen;

