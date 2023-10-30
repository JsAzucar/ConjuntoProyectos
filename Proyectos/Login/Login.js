//Ejemplo sensillo de validación

function loguear(){
    var user=document.getElementById("Nombre").value;
    var pass=document.getElementById("Contraseña").value;

    if(user == "Rafael" && pass == "1234"){
        
        alert(`Hola Cómo estás ${user}, su contraseña es ${pass}, Gracias por acceder al sistema`);
        document.getElementById("Formulario").reset();
        
      

    }
    else{
        alert("Información ingresada incorrecta");

    }

}

