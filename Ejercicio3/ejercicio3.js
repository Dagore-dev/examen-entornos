function creaGrupo (codigo, horario) {

     const alumnos = [];
   
     function matricular (dni, nombre, nota) {
       const alumno = creaAlumno(dni, nombre, nota);
       matriculaAlumno(alumno);
     }
     
     function matriculaAlumno (alumno) {
       alumnos.push(alumno);
     }
   
     function getNumeroAlumnos () {
       return alumnos.length;
     }
   
     function getMediaCalificaciones () {
       return calculaMediaCalificaciones();
     }
   
     function calculaMediaCalificaciones () {
   
       if (alumnos.length !== 0) {
         const notas = alumnos.map(({ nota }) => nota);
         const sumaNotas = notas.reduce((acumulada, actual) => acumulada + actual, 0);
     
         return sumaNotas / alumnos.length;
       }
   
       throw new Error("No hay alumnos en el grupo");
   
     }
   
     return {
       codigo,
       horario,
       alumnos,
       matricular,
       getNumeroAlumnos,
       getMediaCalificaciones
     }
   
   }
   
   function creaAlumno (dni, nombre, nota) {
     return {
       dni,
       nombre,
       nota
     }
   }
   
   const asir1 = creaGrupo("ASIR1", "tarde");
       
   asir1.matricular("2345", "pepe", 7.8);
   asir1.matricular("4545", "juan", 9.8);
   
   console.log(asir1)
   console.log("Número de alumnos", asir1.getNumeroAlumnos())
   console.log("Media de las calificaciones", asir1.getMediaCalificaciones())
   