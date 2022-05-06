function calcular() {

    var sueldo = parseInt(document.getElementById('sueldo').value);
    var antiguedad = parseInt(document.getElementById('antiguedad').value);

    if (sueldo < 1000) {
        if (antiguedad > 10) {
            let aumento = sueldo * 1.20;
            resultado.innerHTML = "El sueldo es " + aumento + "€";
        }
        else {
            if (antiguedad > 5) {
                let aumento = sueldo * 1.15;
                resultado.innerHTML = "El sueldo es " + aumento + "€";
            }
            else {
                let aumento = sueldo * 1.10;
                resultado.innerHTML = "El sueldo es " + aumento + "€";
            }
        }
    }
    else {
        if (antiguedad > 10) {
            let aumento = sueldo * 1.10;
            resultado.innerHTML = "El sueldo es " + aumento + "€";
        }
        else {
            if (antiguedad > 5) {
                let aumento = sueldo * 1.05;
                resultado.innerHTML = "El sueldo es " + aumento + "€";
            }
            else {
                let aumento = sueldo * 1.01;
                resultado.innerHTML = "El sueldo es " + aumento + "€";
            }
        }
    }
}