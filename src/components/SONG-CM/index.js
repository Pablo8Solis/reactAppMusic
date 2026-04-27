import React from "react";
const Songs = ({title, artist, imgSrc, alt, onAdd, hideAddButton}) => {
    const [isAdded, setIsAdded] = React.useState(false);

    const handleButtonClick = () => {
        console.log("Boton clickeado");
        if (onAdd) {
            onAdd();
        }
        setIsAdded(true);
    };

    return (
        <div className='box-song'>
            <div className='box-song-content'>
                <div className='box-song-img'>
                    <img src={imgSrc} alt={alt}/>
                </div>
                <div className='box-song-text'>
                    <p>{title}</p>
                    <p>{artist}</p>
                </div>
                {!hideAddButton && (
                    <button className='box-song-btn' onClick={handleButtonClick}>
                        {isAdded ? '✓' : '+'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Songs;