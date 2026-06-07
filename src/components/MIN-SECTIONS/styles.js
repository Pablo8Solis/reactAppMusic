import { styled } from "styled-components";
import theme from "../../theme";

const MinSectionStyles = styled.section`
    width: 100%;
    height: 3rem;
    display:flex;
    justify-content:start;
    align-items:center;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    &:hover{
    background-color: ${props=> theme.colors.colorHoverAside};
    color: ${props => props.theme.colors.colorHover};

    }
`;

const DivMinSection= styled.div `
    display: flex;
    justify-content:center;
    align-items:center;
    margin-left: 1rem;
`;

const ImgDivMinSection = styled.img `
    width: 2rem;
    height: 2rem;
    margin-right: .5rem;
`;

const TextMinSection = styled.p `
    font-weight: bold;
    font-size: 1.3rem;
`;



export {MinSectionStyles, DivMinSection, ImgDivMinSection, TextMinSection};
