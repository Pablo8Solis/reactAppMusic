import styled from "styled-components";

const SongCard = styled.div`
    margin-left: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SongCardContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(84, 83, 83);
    gap: 1rem;
    padding: 1rem;
    width: 30rem;
    border-radius: 1rem;
`;

const SongCardImage = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 8px;
`;

const SongCardText = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2px;

    & p:first-child {
        text-transform: uppercase;
    }
`;

const AddSongButton = styled.button`
    background-color: transparent;
    color: ${props => (props.$isAdded ? "#22c55e" : "#fff")};
    border: none;
    cursor: pointer;
    font-size: 2rem;
    transition: ease-in-out 0.3s;

    &:hover {
        color: ${props => (props.$isAdded ? "#16a34a" : props.theme.colors.colorHover)};
        transition: ease-in-out 0.3s;
    }
`;

export { SongCard, SongCardContent, SongCardImage, SongCardText, AddSongButton };
