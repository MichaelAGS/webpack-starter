import '../css/componentes.css'
// import goku from '../assets/img/goku.png'


export const saludar = ( nombre ) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }!!!`;

    document.body.append( h1 );

    // Image
    // const img = document.createElement('img');
    // img.src = goku;
    // document.body.append( img );
}