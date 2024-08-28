const msj = document.querySelector(".inputText");
const encMsj = document.querySelector(".txtEnc");

function btnEnc(){

    const msjEnc = encript(msj.value)
    encMsj.value = msjEnc
    msj.value=""

}

function encript (textEnc) {
    let keyMsj = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    textEnc = textEnc.toLowerCase()

    for ( let i = 0; i < keyMsj.length; i++){
        if(textEnc.includes(keyMsj[i][0])){
            textEnc = textEnc.replaceAll(keyMsj[i][0], keyMsj[i][1])
        }
    }

    return textEnc
}

function btnDenc(){

    const msjEnc = dencript(msj.value)
    encMsj.value = msjEnc
    msj.value=""

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