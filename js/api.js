import * as UI from './interfaz.js';


class API {

    constructor(artista,cancion){
        this.artista = artista;
        this.cancion = cancion;

    }

    consultarApi(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {

    
                if(resultado.lyrics){
                const {lyrics} = resultado;
                UI.divResultado.textContent = lyrics;
                UI.headingResultado.textContent = `Letra de la cancion: "${this.cancion}" de ${this.artista} `

                }else{
                    UI.divMensaje.textContent = 'La cancion no existe pureba con otra busqueda';
                    UI.divMensaje.classList.add('error')
                }

            })


    }

}

export default API;
