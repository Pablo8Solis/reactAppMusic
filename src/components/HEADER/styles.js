
import styled from 'styled-components';

const HeaderStyles = styled.header`
    grid-area: 1 / 2 / 6 / 6;
    color: #fff;
    overflow: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    @media screen and (max-width: 39rem) {
        grid-area: 1 / 2 / 6 / 6;
    }
`;

const SectionTopHeader = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid grey;
    padding: 0.5rem 0;
    position: fixed;
    width: 85%;
    background-color: ${props => props.theme.colors.bgColor};
    z-index: 2;

    & input {
        width: 45rem;
        height: 3.5rem;
        border-radius: 2rem;
        border: 1px solid grey;
        font-family: ${props => props.theme.fonts.base};
        padding: 1rem;
        font-weight: bold;
        background-color: ${props => props.theme.colors.bgColor};
        color: #fff;

        &:focus {
            outline: 1px solid ${props => props.theme.colors.colorHover};
            transition: ease-in-out 0.5s;
            border: none;
        }
    }

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        gap: 1rem;

        & input {
            width: 38rem;
        }
    }

    @media screen and (max-width: 39rem) {
        width: 100%;
        flex-wrap: wrap;

        & input {
            width: 100%;
        }
    }
`;

const SectionTopHeaderLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 1px solid grey;
    border-radius: 2rem;

    & span {
        color: #fff;
        text-decoration: none;
        padding: 1rem;
        font-size: 1.4rem;
        cursor: pointer;

        &:hover {
            background-color: gray;
            border-radius: 2rem;
        }
    }
`;

const HeaderP = styled.p`
    margin-top: ${props => props.$topSpace ?? '2rem'};
    padding-left: 2rem;
    font-weight: bold;
    font-size: 1.7rem;
`;

const SectionTopRecientes = styled.section`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
`;

const SectionGen = styled.section`
    padding: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-bottom: -4rem;

    @media screen and (max-width: 768px) {
        & > :last-child,
        & > :nth-child(4) {
            display: none;
        }
    }

    @media screen and (max-width: 39rem) {
        & > :nth-child(3) {
            display: none;
        }
    }
`;

export {
    HeaderStyles,
    SectionTopHeader,
    SectionTopHeaderLinks,
    HeaderP,
    SectionTopRecientes,
    SectionGen,
};
