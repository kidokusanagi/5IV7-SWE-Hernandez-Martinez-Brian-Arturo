const cifrarV = document.querySelector( '#cifrarVigenere' );
const descifrarV = document.querySelector( '#descifrarVigenere' );
const salidaV = document.querySelector( '#salidaV' );


// algo
const abecedarioV = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
const algo = ( txtV, keyV, accion ) => {

    txtV = txtV.replace(/ /g, '');
    let newTxtV = '';
    let newKeyV = '';

    for ( let i = 0; i < txtV.length; i++ ) {
        newKeyV += keyV.charAt(( i%Number( keyV.length )));
    };

    for ( let i = 0; i < txtV.length; i++ ) {
        let c = txtV.charAt( i );
        let posicionTxtV = getPosition( c );
        c = newKeyV.charAt( i );
        let posicionKeyV = getPosition( c );

        // algoritmo ahora si
        let heyCodersV = change( posicionTxtV, posicionKeyV, accion );
        newTxtV += abecedarioV[ heyCodersV ];
    };
    return newTxtV;

};


// change
const change = (  posicionTxtV, posicionKeyV, accion ) => {

    if ( accion ) {
        let y = ( posicionTxtV + posicionKeyV )%27;
        return y;
    };
    if ( !accion ) {
        let y = 0;
        if ( ( posicionTxtV - posicionKeyV ) >= 0 ) {
            y = ( posicionTxtV - posicionKeyV )%27;
        } else {
            y = ( posicionTxtV - posicionKeyV + 27 )%27;
        }
        return y;
    }

};


// getPosition
const getPosition = ( c ) => {

    let posicion = abecedarioV.indexOf( c );
    if ( posicion !== -1 ) {
        return posicion;
    };

};


// cifrar
cifrarV.addEventListener( 'click', async( ) => {

    const txtV = document.querySelector( '#textoVigenere' ).value;
    const keyV = document.querySelector( '#llaveVigenere' ).value;
    if ( txtV && keyV ) {
        const textoCifrado = await algo( txtV, keyV, true );
        salidaV.value = textoCifrado;
    };

});


// descrifrar
descifrarV.addEventListener( 'click', async( ) => {

    const txtV = document.querySelector( '#textoVigenere' ).value;
    const keyV = document.querySelector( '#llaveVigenere' ).value;
    if ( txtV && keyV ) {
        const textoDescifrado = await algo( txtV, keyV, false );
        salidaV.value = textoDescifrado;
    };

});