//Revisar el cuadro de texto
function validarInput() {
    //boton desabilitado si el cuadro texto está vacío 0 = false. !0 = true
    document.getElementById("button").disabled = !document.getElementById("input").value.length;
    //Obtenemos el cuadro de texto
    const input = document.getElementById('input');
    //Guardamos en variable el contenido del cuadro de texto
    const inputValue = input.value;
    //Obtenemos el boton
    const boton = document.getElementById('button');

    //si el contenido del cuadro de texto tiene largo (length) mayor que 0, colocar botón en verde y cambiar texto a encriptar
    if (inputValue.length > 0) {
        Verde();
        ChangeColorDesencrypted();
        changeImageDesencrypted();
    } 
    //si el contenido del cuadro de texto tiene un largo (length) menor o igual que cero, cambiar color a rojo 
    else {
        boton.classList.add('btn-danger');
        boton.classList.remove('btn-success');
        changeImageDesencrypted();
        ChangeColorDesencrypted();
    }
}

//Funcion para cambiar color a rojo y texto a desencriptar
const Rojo = () => {
    var boton = document.getElementById('button');
    boton.classList.add('btn-danger');
    boton.classList.remove('btn-success');
    boton.innerHTML = 'Desencriptar';
}

//Funcion para cambiar color a verde y texto a encriptar
const Verde = () => {
    var boton = document.getElementById('button');
    boton.classList.remove('btn-danger');
    boton.classList.add('btn-success');
    boton.innerHTML = 'Encriptar';
}

//Funcion para ejecutar cuando el boton es presionado
function buttonChange() {
    //Obtenemos el boton
    var content = document.getElementById('button');
    //Si el texto del boton dice 'Enriptar' ejecutar funcion "Rojo()"
    if (content.innerHTML == 'Encriptar') {
        Rojo();
        encrypted();
        ChangeColorEncrypted();
        changeImageEncrypted();
    }
    //Si el boton no dice 'Encriptar' ejecutar funcion "Verde()"
    else { 
        Verde();
        desEncrypted();
        ChangeColorDesencrypted();
        changeImageDesencrypted();
    }
}

// Función para encriptar texto al ingresarlo
function encrypted() {
    // capturamos el valor del input
    const input = document.getElementById("input");
    //capturo el valor del texto en el input
    textEncrypted = input.value;
    varAux = "";
    //si encuentra una letra, que la reemplace por otra 

    //recorrido del texto en el input
    for ( var i = 0; i < textEncrypted.length; i++) {
        
        switch(textEncrypted[i]) {
            case 'a' : 
            varAux += "kljw";
            break;
            case 'e' :
            varAux += "ijwe";
            break;
            case 'i' :
            varAux += "ñsei";
            break;
            case 'o' :
            varAux += "wñwe";
            break;
            case 'u' :
            varAux += "newi";
            break;
            default: varAux += textEncrypted[i];
        }
    }

    input.value = varAux;
}

// Función para encriptar texto al ingresarlo
function desEncrypted() {
    // capturamos el input
    const input = document.getElementById("input");
    //capturo el valor del texto en el input
    textDesencrypted = input.value;
    //se crea una variable auxiliar para desencriptar
    varAuxDes = "";
    //recorrido del texto en el input
    for (var i = 0; i < textDesencrypted.length; i++) {
        //si la posición en i es 'k' y el resto de la sucesión es 'ljw'
        if (textDesencrypted[i] == 'k' && textDesencrypted[i + 1] == 'l' && textDesencrypted[i + 2] == 'j' && textDesencrypted[i + 3] == 'w') {
            //la posición donde el valor igual a 'k' cambia a la letra 'a'
            //el resto de las posiciones siguientes cambian a valores vacíos
            varAuxDes += 'a'
            i = i + 3;
        }
        else if (textDesencrypted[i] == 'i' && textDesencrypted[i + 1] == 'j' && textDesencrypted[i + 2] == 'w' && textDesencrypted[i + 3] == 'e') {
            varAuxDes += 'e'
            i = i + 3;
        }
        else if (textDesencrypted[i] == 'ñ' && textDesencrypted[i + 1] == 's' && textDesencrypted[i + 2] == 'e' && textDesencrypted[i + 3] == 'i') {
            varAuxDes += 'i'
            i = i + 3;
        }
        else if (textDesencrypted[i] == 'w' && textDesencrypted[i + 1] == 'ñ' && textDesencrypted[i + 2] == 'w' && textDesencrypted[i + 3] == 'e') {
            varAuxDes += 'o'
            i = i + 3;
        }
        else if (textDesencrypted[i] == 'n' && textDesencrypted[i + 1] == 'e' && textDesencrypted[i + 2] == 'w' && textDesencrypted[i + 3] == 'i') {
            varAuxDes += 'u'
            i = i + 3;
        }
        else {
            varAuxDes += textDesencrypted[i];

        }
        input.value = varAuxDes;
        console.log(input.value);
    }
};

function ChangeColorEncrypted() {
    //capturamos el elemento al cual le queremos cambiar el color
    var element = document.getElementById('general');
    //cambiamos color del elemento
    setTimeout(() => {
        element.style.backgroundColor ="#DD4B0B";
    } , 200);
}

function ChangeColorDesencrypted() {
    var element = document.getElementById('general');
    setTimeout(() => {
        element.style.backgroundColor ="#28354B";
    } , 200);
}

function changeImageEncrypted() {
    var imagen = document.getElementById('image');

    setTimeout (() => {
        imagen.src = "./image/candado2.png";
    }, 200);
}



function changeImageDesencrypted() {
    var imagen = document.getElementById('image');
    setTimeout (() => {
        imagen.src = "./image/candado.png";
    }, 200);

}
