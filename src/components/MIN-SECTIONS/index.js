import React, {Component, component, use} from 'react'

class MinSections extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            // se pueden meter otros metodos para el componente sino inicializar solo el estado
        }
    }

    

    render({nameOfSection, srcOfImg, altOfImg} = this.props){
        return(
            <section className= "min-sections">
            <div>
                <img src={`${srcOfImg}`} alt={`${altOfImg}`}
                />
                <p>{nameOfSection}</p>
            </div>    
            </section>

        )
    }
};

export default MinSections;


