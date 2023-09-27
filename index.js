let usuario =
    [
        "juan ",
        "miguel ",
        "cammi "
    ]
let Apellidos =
    [
        "ramirez",
        "dorado",
        "ruiz"
    ]
let ide  =
    [
        0,
        1,
        2
    ]
let telefonos =
    [
        566,
        456,
        565
    ]
let Ubicaciones=
    [
        "colombia",
        "Argentina",
        "BraZil"
    ]
    
alert("numero de usuario a registrar: "+  ide.length)

for (empezar = 1; empezar <= 100; empezar++)
{
    function modificarLista ()
{
    let elegir = parseInt(prompt("elige \n 1 para agregar \n 2 para eliminar \n 3 para modificar" ));
 
 if (elegir === 1)
    {
        for (u = 1; u <= 10; u++)
        {
            nombre = prompt("Cual es tu nombre");
            usuario.push(nombre);

            apellido = prompt("Cual es tu apellido");
            Apellidos.push(apellido);

            idU = prompt("Cual es tu id");
            ide.push(idU)

            telefono = prompt("Cual es tu telefono");
            telefonos.push(telefono);

            ubicacion = prompt("Cual es tu ubicacion");
            Ubicaciones.push(ubicacion);

            cancelar = prompt("para agregar dar aceptar para finalizar dar cancelar ")

                                                     
            if (nombre, Apellidos, idU, telefono, ubicacion, cancelar === null) 
                    {
                        console.log("Operación cancelada por el usuario.");
                        console.log("fin del registro");
                        break;
                    }   
        }
        // Ver usuarios

        let a = parseInt(prompt("id de usuario registrado"));

        console.log("nombre: ",usuario[a],"apellido: ", Apellidos[a],"id: ", ide[a],"telefono: ", telefonos[a],"ubicacion: ",Ubicaciones[a])

        // Ver usuarios predeterminados
    }

 

if (elegir == 2)
{
    let b = parseInt(prompt("id de usuario que va a  borrar"));

    // Ver usuarios

     console.log("informacion de usuario borrado \n nombre: ",usuari[b],"apellido: ", Apellidos[b],"id: ", id[b],"telefono: ", telefonos[b],"ubicacion: ",Ubicaciones[b])
    
    // Ver usuarios predeterminados

    usuario.pop(b);
    Apellidos.pop(b);
    ide.pop(b)
    telefonos.pop(b);
    Ubicaciones.pop(b);

}



if (elegir == 3)
{
    let M = parseInt(prompt("id del usuario que quiere modificar"));

    nombre1 = prompt("Cual es tu nombre");
    usuario[M] = nombre1;

    apellido1 = prompt("Cual es tu apellido");
    Apellidos[M] = apellido1;

    telefono1 = prompt("Cual es tu telefono");
    telefonos[M] = telefono1 

    ubicacion1 = prompt("Cual es tu ubicacion");
    Ubicaciones[M] = ubicacion1;

    console.log("informacion de usuario Modificado \n nombre: ",usuario[M],"apellido: ", Apellidos[M],"id: ", ide[M],"telefono: ", telefonos[M],"ubicacion: ",Ubicaciones[M])

}

if (elegir == null)
{
    empezar = 100;
}

alert("Siguiente ID a registrar: "+  ide.length);

}
modificarLista()
}