import * as UI from './interfaz.js'; // exporta todo lo que hay en el archivo y usas el UI.BUSCAR
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);


function buscarCancion(e){
    e.preventDefault();

    //obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista === ''|| cancion === '' ){
        UI.divMensaje.textContent = 'ERROR!! TODOS LOS CAMPOS SON OBLIGATORIOS';
        UI.divMensaje.classList.add('error');
        setTimeout(() => {
            UI.divMensaje.textContent = '';
            UI.divMensaje.remove();
        }, 3000);
        return;

    }

    //Consultar nuestra api
    const busqueda = new API(artista, cancion);

    busqueda.consultarApi();
    console.log(busqueda)

    

}

