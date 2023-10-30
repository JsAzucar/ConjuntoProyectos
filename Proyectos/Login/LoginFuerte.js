//Ejemplo sensillo de validación

function loguear1(){
      //Expresion Regular Solo Números
      var ExpRegSoloNumeros="^[0-9]+$";
 

      var user=document.getElementById("Nombre").value;
      var pass=document.getElementById("Contraseña").value;
  
  
      //Evaluación de Cadena Valida de Nombres de Usuario
  
      //Evaluación de Cadena Valida de Solo Números 
      if(user.match(ExpRegSoloNumeros)!=null){
          alert("Número valido");
      }
      else{
          alert("Error");
      }
}


