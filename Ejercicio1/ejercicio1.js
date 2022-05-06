function calcular() {

    var sueldo = parseInt(document.getElementById('sueldo').value);
    var antiguedad = parseInt(document.getElementById('antiguedad').value);
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
    resultado.innerHTML = "El sueldo es " + aumento + "€";
}