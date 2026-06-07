import React from "react";
import { CardsGenImg, CardsGenSect, CardsGenP} from "./styles";
const CardsGen = ({nameOfGen, srcOfImgGen, altOfImgGen}) =>{
    return(
        <CardsGenSect>
            <CardsGenImg src={`${srcOfImgGen}`} alt={`${altOfImgGen}`}/>
            <CardsGenP>{nameOfGen}</CardsGenP> 
        </CardsGenSect>
        )
    }

export default CardsGen;

