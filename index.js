const  listaDeNombres = ["juan","sandra","junior","miguel" ] ;
const listaDeApellidos = ["Rua","cortes","cespedes","murcia"];
let nombreDeUsuario = [ 0,1,2,3];
let ubicacion = [ "Bogota ,  ", "Santa marta", " manizales", "Cartagena" ];
let contacto = [ 1234 , 6547 , 4568 , 7889 ];

 alert(" usuarios resgistrados  " + nombreDeUsuario.length )

for (i = 1; i < 4 ; i++ ) {
  function Detele (){ 
   let elegir = parseInt (prompt (' 1 para agregar \n 2 para eliminar '))
   if (elegir === 1 ){
    
    for ( i=1; i<4; i++){
      usuario = prompt( " Cual es tu nombre :")
      listaDeNombres.push(usuario)
      console.log(listaDeNombres)
    }  
  }
    if (elegir === 2  ){
      let A = parseInt( prompt("Que Id Quieres eliminar:"));

      listaDeNombres.pop(A);
      listaDeApellidos.pop(A);
      nombreDeUsuario.pop(A);
      ubicacion.pop(A);
      contacto.pop(A);

console.log("contacto eliminado")
      
    }
     }

} 

Detele( )




  
