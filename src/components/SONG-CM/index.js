import React, {Component, component} from 'react'

class Songs extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAdded: false, // track local add state so button can change
            // se pueden meter otros metodos para el componente sino inicializar solo el estado
        }
    }

    handLetButtonClick = ()=>{
        console.log("Boton clickeado")
        if(this.props.onAdd){
            this.props.onAdd();
        }
        this.setState({isAdded:true})
    }

    render({title, artist, imgSrc, alt} = this.props){
        const {isAdded} = this.state;
        // if hideAddButton prop is true we don't render the button at all (used in library)
        return(
            <div className='box-song'>
                <div className='box-song-content'>
                <div className='box-song-img'>
                    <img src={imgSrc} alt={alt}/>
                </div>
                <div className='box-song-text'>
                    <p>{title}</p>
                    <p>{artist}</p>
                </div>
                {!this.props.hideAddButton && (
                    <button className='box-song-btn' onClick={this.handLetButtonClick}>
                        {isAdded ? '✓' : '+'}
                    </button>
                )}
                </div>
            </div>
        )
    }
};

export default Songs;