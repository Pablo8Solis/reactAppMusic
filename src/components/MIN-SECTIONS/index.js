import React from 'react';
const MinSections = ({nameOfSection, srcOfImg, altOfImg}) =>{

    return(
        <section className= "min-sections">
            <div>
                <img src={`${srcOfImg}`} alt={`${altOfImg}`}
                />
                <p>{nameOfSection}</p>
            </div>    
        </section>

    )
};

export default MinSections;

