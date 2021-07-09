function iniciar(){
    campo1=document.getElementById("nombre");
    campo2=document.getElementById("apellido");
    campo3=document.getElementById("mail");
    campo4=document.getElementById("phone");
    campo1.addEventListener("input", validacion, false);
    campo2.addEventListener("input", validacion, false);
    campo3.addEventListener("input", validacion, false);
    validacion();
    }
function validacion(){
        if(campo1.value==''){
    campo1.setCustomValidity('Escribe un nombre');
    campo1.style.background='#d7fbfc';
    }else{
    campo1.style.background="#fbfcd7"
    campo1.setCustomValidity('');
    }
    
    if(campo2.value==''){
        campo2.setCustomValidity('Completar el apellido');
        campo2.style.background='#d7fbfc';
        }else{
        campo2.style.background="#fbfcd7"
        campo2.setCustomValidity('');
        }
        
    if(campo3.value==''){
            campo3.setCustomValidity('Debes ingresar un mail');
            campo3.style.background='#d7fbfc';
            }else{
            campo3.style.background="#fbfcd7"
            campo3.setCustomValidity('');
            }
    }
    window.addEventListener("load", iniciar, false);