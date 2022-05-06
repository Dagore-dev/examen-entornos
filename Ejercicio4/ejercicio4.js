const $DNI = document.getElementById("dni");
const $NOMBRE = document.getElementById("nombre");
const $APELLIDO = document.getElementById("apellido");
const $EMAIL = document.getElementById("email");
const $WEB = document.getElementById("web");
const $PASS = document.getElementById("pass");

function dniValido(dni){
    const res = /\d{2}\.\d{3}\.\d{3}-[A-Z]$/;
    return res.test(dni);
}
function nombreValido(nombre){
  const res = /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/;
  return res.test(nombre);
}
function apellidoValido(apellido){
    const res = /^(?=.{3,15}$)[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/;
    return res.test(apellido);
  }
function emailValido(email)
{
    const res = /\S+@\S+\.\S+/;
    return res.test(email);
}
function webValida(web){
    const res = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    return res.test(web)
}
function passValida(pass)
{
    return pass.length>=8 && pass.length <=10;
}
 
function creaRegistro(dni, nombre, apellido, email, web, pass){
    return {
        dni,
        nombre,
        apellido,
        email,
        web,
        pass
    }
}

function validacion(){
    const dni = $DNI.value;
    const nombre = $NOMBRE.value;
    const apellido = $APELLIDO.value;
    const email = $EMAIL.value;
    const web = $WEB.value;
    const pass = $PASS.value;
 
    if(!dniValido(dni))
    {
        console.log("El DNI no es válido")
    }
    else
    {
        if(!nombreValido(nombre))
        {
            console.log("El nombre no es válido")
        }
        else
        {
            if(!apellidoValido(apellido))
            {
                console.log("El apellido no es válido")
            }
            else
            {
                if(!emailValido(email))
                {
                    console.log("El email no es válido")
                }
                else
                {
                    if(!webValida(web))
                    {
                        console.log("La dirección web no es válida")
                    }
                    else
                    {
                        if(!passValida(pass))
                        {
                            console.log("La contraseña debe tener entre 8 y 10 caracteres")
                        }
                        else
                        {
                            newRegistro = creaRegistro(dni, nombre, apellido, email, web, pass);
                        }
                    }
                }
            }
        }
    }
}
