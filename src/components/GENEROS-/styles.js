import { styled } from "styled-components";

const CardsGenSect = styled.section`
    @media screen and (max-width: 39rem) {
        &:nth-child(3) {
            display: none;
        }
    }
`;

const CardsGenImg = styled.img`
    width: 25rem;
    height: 14rem;
    z-index: -1;
    border-radius: 2rem;
    transition: ease-in-out .3s;
    cursor: pointer;
    &:hover{
        opacity: .7;
        transition: ease-in-out .3s;
    }
`;

const CardsGenP = styled.p`
    position: relative;
    top: -4.5rem;
    left: 1rem;
    font-size: 1.8rem;
    font-weight: bold;
`;

export {CardsGenSect, CardsGenImg, CardsGenP};