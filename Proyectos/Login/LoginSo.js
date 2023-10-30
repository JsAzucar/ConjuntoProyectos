

const form=document.getElementById('Formulario');
const username=document.getElementById('Nombre');
const email=document.getElementById('Email');
const password=document.getElementById('Contraseña');
const password2=document.getElementById('ConfirmContraseña');

 form.addEventListener('submit', () => {
    //e.preventDefault(); //Verificar luego el funcionamiento

    validateInputs();

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const PadreSuperior = inputControl.parentElement;
    const errorDisplay = PadreSuperior.querySelector(".Error");

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const PadreSuperior = inputControl.parentElement;
    const errorDisplay = PadreSuperior.querySelector(".Error");

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

 const isValidNombre = NombreValido => {

    if(NombreValido === ''){
        setError(username,'username is required');
       }else{
        setSuccess(username);
       }
    
    
 }
 
 const isValidEmail = emailFuncion => {
    var ExpRegEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
 
//var EmailValido="contacto.estilow3b@gmail.com";//Cadena de Email

    
    //Evaluación de Cadena Invalida de Email
        if(emailFuncion === '')
        {
            setError(email,'Email is required');
        }
        else if(!(emailFuncion.match(ExpRegEmail))){
            setError(email,'Email is Invalid Ejemplo: ismaelmarin380@gmail.com');
            //console.log("Email Invalido");
        }
        //Evaluación de Cadena Valida de Email 
        else
        {
            setSuccess(email);
            //console.log("Email Válido");
        }    
       
    }
 
  const isValidContraseña = ContraFuncion => {

    var GuardarContra;
    //Expresión Regular Contraseña Fuerte
var ExpRegPassFuerte=/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
     
    if(ContraFuncion === ''){
        setError(password,'Password is required');
    }
    else if(!(ContraFuncion.match(ExpRegPassFuerte)))
    {
    setError(password,'password is invalid, Ejemplo: Letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos.');
    }
    else
        { 
            setSuccess(password);
            //console.log("Email Válido");
        }   
    }
    
    const isValidContraseñaSegura = (ContraSegura1,ContraSegura2) => {

        if(ContraSegura2 === ''){
            setError(password2,'Password is required');
        }
        else if (ContraSegura1 != ContraSegura2) {
            setError(password2,'Passwords do not match');
        }
        else{
            setSuccess(password2);

        }

    }

 
const validateInputs = () => {
   const usernameValue=username.value.trim();
   const emailValue=email.value.trim();
   const passwordValue = password.value.trim();
   const password2Value = password2.value.trim();


   isValidNombre(usernameValue);
   isValidEmail(emailValue);
   isValidContraseña(passwordValue);
   isValidContraseñaSegura(passwordValue,password2Value);

  


} 
