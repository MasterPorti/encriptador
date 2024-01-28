// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Espera a que el DOM esté completamente cargado

    const textarea = document.querySelector('.inputTextarea');
    const encriptarButton = document.querySelector('.encriptarButton');
    const desencriptarButton = document.querySelector('.desencriptarButton');
    const formulario = document.querySelector('.formulario');
    const waitcontainer = document.getElementById("waitContainer");
    const encryptContainer = document.getElementById("encryptContainer");
    const output = document.getElementById("outputP");

    formulario.addEventListener('submit', function (event) {
        // Evita que el formulario se envíe
        event.preventDefault();
    });

    encriptarButton.addEventListener('click', function () {
    
        const inputText = textarea.value;
        if (inputText === '') return
        waitcontainer.classList.add('hidden');
        waitcontainer.classList.remove('waitContainer');
        encryptContainer.classList.remove('hidden');
        output.innerText = inputText;

        let texto = inputText;
        newText = texto.replace(/e/g,'enter');
        newText = newText.replace(/i/g,'imes');
        newText = newText.replace(/a/g,'ai');
        newText = newText.replace(/o/g,'ober');
        newText = newText.replace(/u/g,'ufat');
        output.innerText = newText;
        textarea.value = '';
    });

    desencriptarButton.addEventListener('click', function () {
        const inputText = textarea.value;
        if (inputText === '') return
        waitcontainer.classList.add('hidden');
        waitcontainer.classList.remove('waitContainer');
        encryptContainer.classList.remove('hidden');
        output.innerText = inputText;

        let texto = inputText;
        newText = texto.replace(/enter/g,'e');
        newText = newText.replace(/imes/g,'i');
        newText = newText.replace(/ai/g,'a');
        newText = newText.replace(/ober/g,'o');
        newText = newText.replace(/ufat/g,'u');
        output.innerText = newText;
        textarea.value = '';
    });

});
