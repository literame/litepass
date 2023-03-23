//imports
import './showMessage.js';
import {showMessage} from './showMessage.js';

//variables y constantes
const btnContraseña = document.getElementById("optionsForm"), 
btnContraseñaOpt = document.getElementById("generateBtn"),
btnCopiarPass =  document.getElementById("copy-btn");



const sms = "contraseña generada";
var pass;

// Función para generar contraseñas aleatorias basadas en las opciones de usuario
function generatePassword(showPassword = true) {
	let length = document.getElementById("length").value,
	 includeUppercase = document.getElementById("uppercase").checked,
    includeLowercase= document.getElementById("lowercase").checked,
    includeNumbers = document.getElementById("numbers").checked,
    includeSymbols = document.getElementById("symbols").checked,
		charset = "",
		password = "";

    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
            
        showMessage("Debe seleccionar al menos una opción.", "error");
        return ;
            
    }    
    // Crea el conjunto de caracteres basado en las opciones del usuario
    if (includeUppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
    }
    if (includeLowercase) {
        charset += "abcdefghijklmnopqrstuvwxyz";
        
    }
    if (includeNumbers) {
        charset += "0123456789";
    }
    if (includeSymbols) {
        charset += "@#$%&*()_+~|}{[]:?></-";
    } 


    // Genera la contraseña aleatoria
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }

    // Muestra la contraseña generada en la página si se especificó
    if (showPassword) {
        document.getElementById("password").innerHTML = password;
        showMessage(sms);
    }


    pass =  password;
    return password;


    
}


// Actualiza la contraseña en la página cuando se envía el formulario
btnContraseña.addEventListener("submit", function(event) {
	event.preventDefault();
	generatePassword();
    
    
});

// Genera una nueva contraseña cuando se hace clic en el botón "Generar Nueva Contraseña"
btnContraseñaOpt.addEventListener("click", function(event) {
	event.preventDefault();
    generatePassword();
    
    
});


// btnCopiarPass.addEventListener("click", function() {
  
//     navigator.clipboard.writeText(pass).then(function() {
//       showMessage("copiado al portapapeles", "copy");
//     }, function() {
//     //     if(pass === undefined){
//     //   showMessage("Error al copiar el texto al portapapeles", "error");
//     //     }
//     });
    
//   });
  
 
btnCopiarPass.addEventListener("click", function() {
    if(pass === undefined){
        showMessage("Error al copiar el texto al portapapeles", "error");
          } else{
            navigator.clipboard.writeText(pass);
                showMessage("copiado al portapapeles", "copy");
            }
    
    
  });
  
// const modal = document.getElementById("modal");
//   function modalSendError(){
      // trabajando
//   }