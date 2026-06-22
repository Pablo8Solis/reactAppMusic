import React from "react";
import { AddSongButton, SongCard, SongCardContent, SongCardImage, SongCardText } from "./styles";

const Songs = ({title, artist, imgSrc, alt, onAdd, hideAddButton}) => {
    const [isAdded, setIsAdded] = React.useState(false);

    const handleButtonClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onAdd) {
            onAdd();
        }
        setIsAdded(true);
    };


    return (
        <SongCard>
            <SongCardContent>
                <div>
                    <SongCardImage src={imgSrc} alt={alt}/>
                </div>
                <SongCardText>
                    <p>{title}</p>
                    <p>{artist}</p>
                </SongCardText>
                {!hideAddButton && (
                    <AddSongButton $isAdded={isAdded} onClick={handleButtonClick}>
                        {isAdded ? '✓' : '+'}
                    </AddSongButton>
                )}
            </SongCardContent>
        </SongCard>
    );
};

export default Songs;