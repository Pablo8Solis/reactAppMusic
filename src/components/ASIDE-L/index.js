import React, {Component, component} from 'react'
import MinSections from '../MIN-SECTIONS'


class AsideLeft extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false,
            // se pueden meter otros metodos para el componente sino inicializar solo el estado
        }
    }

    handLetButtonClick = ()=>{
        console.log("Boton clickeado")
        this.setState({isLoggedIn:true})

    }

    render(){
        return(
            <aside className= "aside-left">
                <div className='top'></div>
                <div className='sects'>
                    <MinSections nameOfSection="Buscar" srcOfImg="/assets/img/search.svg" altOfImg="Buscar"/>
                    <MinSections nameOfSection="Inicio" srcOfImg="/assets/img/home.svg" altOfImg="inicio"/>
                    <MinSections nameOfSection="Novedades" srcOfImg="/assets/img/squares.svg" altOfImg="Novedades"/>
                    <MinSections nameOfSection="Radio" srcOfImg="/assets/img/radio.svg" altOfImg="Radio"/>
                    <p className='sects-p'>Biblioteca</p>
                    <MinSections nameOfSection="Recientes" srcOfImg="/assets/img/recientes.svg" altOfImg="Recientes"/>
                    <MinSections nameOfSection="Artistas" srcOfImg="/assets/img/artistas.svg" altOfImg="Artistas"/>
                    <MinSections nameOfSection="Albums" srcOfImg="/assets/img/albumes.svg" altOfImg="Albums"/>
                    <MinSections nameOfSection="Canciones" srcOfImg="/assets/img/canciones.svg" altOfImg="Canciones"/>
                    <MinSections nameOfSection="Para ti" srcOfImg="/assets/img/para-ti.svg" altOfImg="Para ti"/>
                    <p className='sects-p'>Playlist</p>
                    <MinSections nameOfSection="Todas las playlist" srcOfImg="/assets/img/todas-playlist.svg" altOfImg="playlist"/>
                    <MinSections nameOfSection="Canciones favoritas" srcOfImg="/assets/img/favoritas.svg" altOfImg="favoritas"/>
                    <MinSections nameOfSection="Bad Bunny Essent..." srcOfImg="/assets/img/Bad.webp" altOfImg="Bad Bunny"/>
                    <MinSections nameOfSection="The Marias: Subm..." srcOfImg="/assets/img/submarine.webp" altOfImg="Submarine"/>
                    <MinSections nameOfSection="Nsqk Essentials" srcOfImg="/assets/img/nsqk.webp" altOfImg="Nsqk Essentials"/>
                    <MinSections nameOfSection="WOS Essentials" srcOfImg="/assets/img/wos.webp" altOfImg="WOS Essentials"/>
                    <MinSections nameOfSection="Jazz Japones" srcOfImg="/assets/img/jazz.webp" altOfImg="Jazz Japones"/>
                    <MinSections nameOfSection="Apple Music Clásica" srcOfImg="/assets/img/clasica.webp" altOfImg="Clásica"/>
                    <MinSections nameOfSection="Estación lo-fi" srcOfImg="/assets/img/lofi.webp" altOfImg="lo-fi"/>
                    <MinSections nameOfSection="Mood Booster" srcOfImg="/assets/img/moodbooster.webp" altOfImg="Mood Booster"/>
                    <MinSections nameOfSection="Nueva Playlist" srcOfImg="/assets/img/nueva-playlist.svg" altOfImg="Nueva Playlist"/>
                </div>
                <div className='button'>
                    <div className='button-div'>
                    <img src="/assets/img/perfil-zoo.JPG" alt="foto"/>
                    <p>Pablo Solis</p>
                    </div>
                </div>
            </aside>
        )
    }
};

export default AsideLeft;