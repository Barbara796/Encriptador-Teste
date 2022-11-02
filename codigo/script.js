const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const btnCopy = document.querySelector(".btn-copiar");

//Encriptar mensagem

validarInput()

function btnEncriptar() {
        if(!validarInput()){
            
            const textoEncriptado = encriptar(inputTexto.value)
            mensagem.value = textoEncriptado
            mensagem.style.backgroundImage="none"
            inputTexto.value = ""
        }
    
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}


//Desencriptar mensagem

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"  
}

/* function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
} */

function desencriptar(stringDesencriptada) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()
    for (let i = 0; i < matrixCode.length; i++) {
      if (stringDesencriptada.includes(matrixCode[i][1])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrixCode[i][1], matrixCode[i][0])
      }
    }
    return stringDesencriptada
  }


//botão copiar
function copiar() {
    const msg = document.querySelector(".mensagem");
    msg.select();
    navigator.clipboard.writeText(msg.value)
    msg.value = "";
}

function validarInput() {

    let validador = document.querySelector(".input-texto").value;
    let teste = validador.match(/^[a-z]*$/)
  
    if (!teste) {
        alert("Caracteres inválidos ou espaço em branco");
      location.reload()
      return true
    }
  
  }