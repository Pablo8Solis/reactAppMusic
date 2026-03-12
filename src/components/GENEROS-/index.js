import React, {Component, component, use} from 'react'

class CardsGen extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            // se pueden meter otros metodos para el componente sino inicializar solo el estado
        }
    }

    

    render({nameOfGen, srcOfImgGen, altOfImgGen} = this.props){
        return(
            <section className= "cards-gen">
                <img src={`${srcOfImgGen}`} alt={`${altOfImgGen}`}/>
                <p>{nameOfGen}</p> 
            </section>
        )
    }
};

export default CardsGen;

