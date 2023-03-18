import { pedirCarta, valorCarta, crearCartaHTML } from './'; 

/**
 *  Turno computadora
 * @param {Number} puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if( !puntosHTML ) throw new Error(' Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora <= puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if ( puntosComputadora === puntosMinimos) {
            Swal.fire({
                title: 'TIE!',
                width: 600,
                imageWidth: 400,
                imageHeight: 200,
                padding: '6rem',
                color: '#716add',
                background: '#BBDED6',
                imageUrl: 'https://media.giphy.com/media/xT3i0P4CYQcdmFZQkM/giphy.gif',
                position: 'center',
                grow: 'fullscreen',
                timer: 5000
              })
        } else if ( puntosMinimos > puntosComputadora && puntosMinimos <= 21 || puntosComputadora > 21 ) {
            Swal.fire({
                title: 'YOU WON!',
                width: 600,
                imageWidth: 400,
                imageHeight: 200,
                padding: '7rem',
                color: '#716add',
                background: '#BBDED6',
                imageUrl: 'https://media.giphy.com/media/3ov9jNw01KHVtg4Sd2/giphy.gif',
                position: 'center',
                grow: 'fullscreen',
                timer: 5000
              })

        } else if ( puntosComputadora > puntosMinimos && puntosComputadora <= 21 || puntosMinimos > 21 ) {
            
            Swal.fire({
                title: 'YOU LOST!',
                width: 600,
                imageWidth: 400,
                imageHeight: 200,
                 padding: '6rem',
                color: '#716add',
                background: '#BBDED6',
                imageUrl: 'https://media.giphy.com/media/iG7Kwfxga9r20/giphy.gif',
                position: 'center',
                grow: 'fullscreen',
                timer: 5000
              })
            
        }
    }, 1000);
}

