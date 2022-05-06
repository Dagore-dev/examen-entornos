const $CADENA = document.getElementById("cadena");

function ordenarCadenaDescendente(){
    const cadena = $CADENA.value;
    const cadenas = cadena.split(" ");
        
    cadenas.sort(comparadorCadenas);

    imprimeCadenas(cadenas);
}

function comparadorCadenas (a, b) { 
    if (a.length === b.length) {
        return 0;
    }
    else {
        if (a.length < b.length) {
            return 1;
        }
        return -1;
    }
}

function imprimeCadenas ( cadenas ) {
    cadenas.forEach(cadena => console.log(cadena));
}
