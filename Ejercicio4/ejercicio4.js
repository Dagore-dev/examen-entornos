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
 
function creaObjeto(dni, nombre, apellido, email, web, pass){
    this.dni = dni;
    this.nombre = nombre;
    this.apellido=apellido;
    this.email = email;
    this.web = web;
    this.passw = pass;
}

function Validacion(){
    const dni = document.getElementById("dni").value
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const email = document.getElementById("email").value
    const web = document.getElementById("web").value
    const pass = document.getElementById("pass").value
 
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
                            newRegistro = new creaObjeto(dni, nombre, apellido, email, web, pass);
                        }
                    }
                }
            }
        }
    }
}
