const $SUELDO = document.getElementById('sueldo');
const $ANTIGUEDAD = document.getElementById('antiguedad');
const $RESULTADO = document.getElementById('resultado');

function calcular() {

    const sueldo = parseInt($SUELDO.value);
    const antiguedad = parseInt($ANTIGUEDAD.value);
    let aumento = sueldo;

    if (sueldo < 1000) {
        if (antiguedad > 10) {
            aumento *= 1.20;
        }
        else {
            if (antiguedad > 5) {
                aumento *= 1.15;
            }
            else {
                aumento *= 1.10;
            }
        }
    }
    else {
        if (antiguedad > 10) {
            aumento *= 1.10;
        }
        else {
            if (antiguedad > 5) {
                aumento *= 1.05;
            }
            else {
                aumento *= 1.01;
            }
        }
    }

    imprimeResultado(aumento);
}

function imprimeResultado ( aumento ) {
    $RESULTADO.innerHTML = "El sueldo es " + aumento + "€";
}
