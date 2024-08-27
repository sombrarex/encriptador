// Función para encriptar el texto
function encriptar() {
    const inputText = document.getElementById("inputText").value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        outputText += String.fromCharCode(charCode + 3);  // Desplazamiento de 3 caracteres
    }

    document.getElementById("outputText").value = outputText;
}

// Función para desencriptar el texto
function desencriptar() {
    const inputText = document.getElementById("inputText").value;
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);
        outputText += String.fromCharCode(charCode - 3);  // Deshacer el desplazamiento de 3 caracteres
    }

    document.getElementById("outputText").value = outputText;
}
