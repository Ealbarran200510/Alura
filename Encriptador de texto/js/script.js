/* Mediante el uso del DOM se recupera el mensaje ingresado por el usuario dentro del
input mediante querySelector con la clase inputAreaMsj.
Además se selecciona el input con la clase inputAreaEnc para mostrar la respuesta con el
mensaje una vez encriptado*/

const msjUser = document.querySelector(".inputAreaMsj");
const encMsj = document.querySelector(".inputAreaEnc");

/* Mediante btnEnc se implementa la funcionalidad del botón Encriptar. 
La constante msjEnc llama a la función encriptar con el valor del mensaje definido por msjUser.
Ahora el valor de encMsj que se mostrará en pantalla será igual al valor msjEnc una vez 
que se ha ejecutado la función encriptar.
Posteriormente el valor del input msjUser será igual a un campo vacio para limpiar 
automáticamente el campo en pantalla después de haber dado click al botón Encriptar Mensaje.
El botón adquiere la funcionalidad mediante el método onclick en HTML */

function btnEnc(){

    const msjEnc = encript(msjUser.value)
    encMsj.value = msjEnc
    msjUser.value=""

}

/* La función encriptar define un array que contiene todas las vocales a sustituir en el 
mensaje.
Recibe como parámetro el texto encriptado y lo transforma a minúsculas con toLowerCase.
El ciclo for recorre el arreglo para sustituir cada una de las vocales con la clave
correspondiente. Si el texto contiene algún valor del arreglo se sustituye utilizando
replaceAll.
Finalmente la función devuelve el texto encriptado una vez finalizado el ciclo for */

function encript (txtEnc) {
    let keyMsj = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    txtEnc = txtEnc.toLowerCase()

    for ( let i = 0; i < keyMsj.length; i++){
        if(txtEnc.includes(keyMsj[i][0])){
            txtEnc = txtEnc.replaceAll(keyMsj[i][0], keyMsj[i][1])
        }
    }

    return txtEnc
}

function btnDenc(){

    const msjDenc = dencript(msjUser.value)
    encMsj.value = msjDenc
    msjUser.value=""

}

function dencript (textDenc) {
    let keyMsj = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    textDenc = textDenc.toLowerCase()

    for ( let i = 0; i < keyMsj.length; i++){
        if(textDenc.includes(keyMsj[i][1])){
            textDenc = textDenc.replaceAll(keyMsj[i][1], keyMsj[i][0])
        }
    }

    return textDenc
}

function btnCopy(){

    const msjCopy = encMsj.value
    encMsj.value=msjCopy


}