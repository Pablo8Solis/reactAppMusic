import styled from "styled-components";

const SearchInput = styled.input`
    width: 45rem;
    height: 3.5rem;
    border-radius: 2rem;
    border: 1px solid ${props => (props.$hasValue ? props.theme.colors.colorHover : "grey")};
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

    @media screen and (max-width: 768px) {
        width: 38rem;
    }

    @media screen and (max-width: 39rem) {
        width: 100%;
    }
`;

export { SearchInput };
