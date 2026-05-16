import React from 'react'
import MinSections from '../MIN-SECTIONS'


const AsideLeft = () =>{


        return(
            <aside className= "aside-left">
                <div className='top'></div>
                <div className='sects'>
                    <MinSections nameOfSection="Search" srcOfImg="/assets/img/search.svg" altOfImg="Buscar"/>
                    <MinSections nameOfSection="Home" srcOfImg="/assets/img/home.svg" altOfImg="inicio"/>
                    <MinSections nameOfSection="News" srcOfImg="/assets/img/squares.svg" altOfImg="Novedades"/>
                    <MinSections nameOfSection="Radio" srcOfImg="/assets/img/radio.svg" altOfImg="Radio"/>
                    <p className='sects-p'>Biblioteca</p>
                    <MinSections nameOfSection="Recent" srcOfImg="/assets/img/recientes.svg" altOfImg="Recientes"/>
                    <MinSections nameOfSection="Artist" srcOfImg="/assets/img/artistas.svg" altOfImg="Artistas"/>
                    <MinSections nameOfSection="Albums" srcOfImg="/assets/img/albumes.svg" altOfImg="Albums"/>
                    <MinSections nameOfSection="Songs" srcOfImg="/assets/img/canciones.svg" altOfImg="Canciones"/>
                    <MinSections nameOfSection="For You" srcOfImg="/assets/img/para-ti.svg" altOfImg="Para ti"/>
                    <p className='sects-p'>Playlist</p>
                    <MinSections nameOfSection="All Playlists" srcOfImg="/assets/img/todas-playlist.svg" altOfImg="playlist"/>
                    <MinSections nameOfSection="Favorites Songs" srcOfImg="/assets/img/favoritas.svg" altOfImg="favoritas"/>
                    <MinSections nameOfSection="Bad Bunny Essent..." srcOfImg="/assets/img/Bad.webp" altOfImg="Bad Bunny"/>
                    <MinSections nameOfSection="The Marias: Subm..." srcOfImg="/assets/img/submarine.webp" altOfImg="Submarine"/>
                    <MinSections nameOfSection="Nsqk Essentials" srcOfImg="/assets/img/nsqk.webp" altOfImg="Nsqk Essentials"/>
                    <MinSections nameOfSection="WOS Essentials" srcOfImg="/assets/img/wos.webp" altOfImg="WOS Essentials"/>
                    <MinSections nameOfSection="Jazz Japones" srcOfImg="/assets/img/jazz.webp" altOfImg="Jazz Japones"/>
                    <MinSections nameOfSection="Apple Music Clasic" srcOfImg="/assets/img/clasica.webp" altOfImg="Clásica"/>
                    <MinSections nameOfSection="Station lo-fi" srcOfImg="/assets/img/lofi.webp" altOfImg="lo-fi"/>
                    <MinSections nameOfSection="Mood Booster" srcOfImg="/assets/img/moodbooster.webp" altOfImg="Mood Booster"/>
                    <MinSections nameOfSection="New Playlist" srcOfImg="/assets/img/nueva-playlist.svg" altOfImg="Nueva Playlist"/>
                </div>
                <div className='button'>
                    <div className='button-div'>
                    <img src="/assets/img/perfil-zoo.JPG" alt="foto"/>
                    <p>Pablo Solis</p>
                    </div>
                </div>
            </aside>
        )
    
};

export default AsideLeft;