import React from 'react';
import { DivMinSection, ImgDivMinSection, MinSectionStyles, TextMinSection } from './styles';
const MinSections = ({nameOfSection, srcOfImg, altOfImg}) =>{

    return(
        <MinSectionStyles>
            <DivMinSection>
                <ImgDivMinSection src={`${srcOfImg}`} alt={`${altOfImg}`}
                />
                <TextMinSection>{nameOfSection}</TextMinSection>
            </DivMinSection>    
       </MinSectionStyles>

    )
};

export default MinSections;

