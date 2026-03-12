import React, {Component, component} from 'react'
import Songs from '../SONG-CM'
import CardsGen from '../GENEROS-'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
        searchResults: []
        }

        this.songs = [
      { title: "Submarine", artist: "The Marias", img: "/assets/img/submarine.webp" },
      { title: "Mami 100pre sabe", artist: "Alvaro Díaz", img: "/assets/img/100pre.webp" },
      { title: "Debí tirar mas fotos", artist: "Bad Bunny", img: "/assets/img/DiTM.webp" },
      { title: "Terraza", artist: "WOS", img: "/assets/img/terraza.webp" },
      { title: "Intro", artist: "Young Miko", img: "/assets/img/notDis.webp" },
      { title: "No one noticed", artist: "The Marias", img: "/assets/img/noticed.webp" }
    ]
};


 handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    const value = e.target.value.toLowerCase()

    const results = this.songs.filter(song =>
      song.title.toLowerCase().includes(value) ||
      song.artist.toLowerCase().includes(value)
    )

    this.setState(prevState => ({
      searchResults: [...prevState.searchResults, ...results]
    }))

    e.target.value = "" // limpia el input
  }
}



    render(){
       const isLibrary = this.props.view === "library";


       

        return(
            <header className='header'>
                <section className='section-top-header'>
                    <div></div>
                    <input type="text" placeholder="Buscar Canción" onKeyDown={this.handleKeyDown}/>
                    <div className='section-top-header-links'>
                        <span onClick={this.props.onGoHome}>Apple Music</span>
                        <span onClick={this.props.onGoLibrary}>Biblioteca</span>
                    </div>

                </section>

                {!isLibrary &&(
                    <>
                <p className='header-p header-p-1'>Buscados recientemente</p>
                <section className='section-top-recientes'>
                    {this.state.searchResults.map((song, index) => (
                        <Songs
                        key={index}
                        title={song.title}
                        artist={song.artist}
                        imgSrc={song.img}
                        alt={song.title}
                        onAdd={() => this.props.onAddLibrary && this.props.onAddLibrary(song)}
                        />
                    ))}
                </section>
                <p className='header-p'>Explorar Categorías</p>
                <section className='section-gen'>
                    <CardsGen nameOfGen="Radio" srcOfImgGen="/assets/img/GenRadio.webp" altOfImgGen="Radio"/>
                    <CardsGen nameOfGen="Hip-hop/rap" srcOfImgGen="/assets/img/GenHipHop.webp" altOfImgGen="Pop"/>
                    <CardsGen nameOfGen="Exitos" srcOfImgGen="/assets/img/Genexitos.webp" altOfImgGen="Hip Hop"/>
                    <CardsGen className="tablet" nameOfGen="Urbano latino" srcOfImgGen="/assets/img/Genultralatino.webp" altOfImgGen="Rock"/>
                    <CardsGen className="tablet" nameOfGen="Rock y alternativa" srcOfImgGen="/assets/img/GenRock.webp" altOfImgGen="Pop"/>
                </section>
                 <section className='section-gen'>
                    <CardsGen nameOfGen="Dance" srcOfImgGen="/assets/img/GenDance.webp" altOfImgGen="Radio"/>
                    <CardsGen nameOfGen="Fiesta" srcOfImgGen="/assets/img/Genfiesta.webp" altOfImgGen="Pop"/>
                    <CardsGen nameOfGen="Latam" srcOfImgGen="/assets/img/GenLatam.webp" altOfImgGen="Hip Hop"/>
                    <CardsGen nameOfGen="Pop en español" srcOfImgGen="/assets/img/GenPopEsp.webp" altOfImgGen="Rock"/>
                    <CardsGen nameOfGen="Pop latino" srcOfImgGen="/assets/img/GenPopLatino.webp" altOfImgGen="Pop"/>
                </section>
                 <section className='section-gen'>
                    <CardsGen nameOfGen="Rock en español" srcOfImgGen="/assets/img/GenRockEsp.webp" altOfImgGen="Radio"/>
                    <CardsGen nameOfGen="Charts" srcOfImgGen="/assets/img/Charts.webp" altOfImgGen="Pop"/>
                    <CardsGen nameOfGen="Clásica" srcOfImgGen="/assets/img/clasica.webp" altOfImgGen="Hip Hop"/>
                    <CardsGen nameOfGen="Buena vibra" srcOfImgGen="/assets/img/Genbuenavibra.webp" altOfImgGen="Rock"/>
                    <CardsGen nameOfGen="Jazz" srcOfImgGen="/assets/img/Genjazz.webp" altOfImgGen="Pop"/>
                </section>
                 <section className='section-gen'>
                    <CardsGen nameOfGen="Essentials" srcOfImgGen="/assets/img/Genessentials.webp" altOfImgGen="Radio"/>
                    <CardsGen nameOfGen="Indie" srcOfImgGen="/assets/img/Genindie.webp" altOfImgGen="Pop"/>
                    <CardsGen nameOfGen="Up next" srcOfImgGen="/assets/img/Genupnext.webp" altOfImgGen="Hip Hop"/>
                    <CardsGen nameOfGen="Dj mix" srcOfImgGen="/assets/img/Gendjmix.webp" altOfImgGen="Rock"/>
                    <CardsGen nameOfGen="R&B" srcOfImgGen="/assets/img/GeNRANDB.webp" altOfImgGen="Pop"/>
                </section>
                 <section className='section-gen'>
                    <CardsGen nameOfGen="Decadas" srcOfImgGen="/assets/img/Gendecadas.webp" altOfImgGen="Radio"/>
                    <CardsGen nameOfGen="Country" srcOfImgGen="/assets/img/Gencountry.webp" altOfImgGen="Pop"/>
                    <CardsGen nameOfGen="Para dormir" srcOfImgGen="/assets/img/Gensleep.webp" altOfImgGen="Hip Hop"/>
                    <CardsGen nameOfGen="Blues" srcOfImgGen="/assets/img/Genblues.webp" altOfImgGen="Rock"/>
                    <CardsGen nameOfGen="Metal" srcOfImgGen="/assets/img/Genmetal.webp" altOfImgGen="Pop"/>
                </section>

                    </>
                )}
               
            </header>
        )
    }
};

export default Header;