 let listaDeContacos = [ {
    nombre : "juan",
    apellido: "rua",
  }];
  

const agg =  (nombre,apellido) =>{
  let contactoNuevo = {
    nombre : nombre , 
    apellido :apellido,
  } 
  console.log(nombre,apellido)

  listaDeContacos.push(contactoNuevo);
  console.log("contactos agragados" , contactoNuevo)
}; 
 agg ("sandra" , "Rua" ) 

 const Delete = (eliminar) => {
  listaDeContacos.splice(eliminar);
 console.log("Contacto eliminado " , eliminar)
 }

 Delete(0)

for ( let i = 0 ; i< listaDeContacos.length ; i++){
 console.log(listaDeContacos[i])
}