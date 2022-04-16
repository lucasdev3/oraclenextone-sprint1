
let buttonCriptografia = document.getElementById('criptografia');
let buttonDescriptografia = document.getElementById('descriptografia');
let botaoCopia = document.getElementById('copia');
let arrayVogais = ['a', 'e', 'i', 'o', 'u'];
let arrayVogalCriptografada = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let arrayLetrasPermitidas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
var globalCriptografado = '';

buttonCriptografia.addEventListener('click', () => {
    let frase = $('#frase').val();
    let checkCaracteres = true;
    for (let i of frase) {
        if (arrayLetrasPermitidas.includes(i) === false) {
            alert("Informe uma frase válida!");
            alert("A frase deve estar em minusculo e não pode conter numeros ou acentuação");
            checkCaracteres = false;

            return 0;
        }
    }
    if (!frase || !(frase.toLowerCase() === frase) || !checkCaracteres) {
        alert("Informe uma frase válida!");
        alert("A frase deve estar em minusculo e não pode conter numeros ou acentuação");
        return 0;
    }else {

        let fraseSplit = frase.split('');
        for (let i = 0; i < frase.length; i++) {
            for (let j = 0; j < arrayVogais.length; j++) {
                if (frase[i] === arrayVogais[j]) {
                    fraseSplit[i] = arrayVogalCriptografada[j];
                }
            }
        }
        let fraseCriptografada = fraseSplit.join('');
        let elementoPai = document.getElementById('content-history');
        let titulo = document.createElement('p')
        let texto = document.createTextNode(`Frase à ser Criptografada "${frase}": ${fraseCriptografada}`);
        titulo.appendChild(texto);
        elementoPai.appendChild(titulo);
        globalCriptografado = fraseCriptografada;
        $('#frase').val('');
    }
});

buttonDescriptografia.addEventListener('click', () => {
    let frase = $('#frase').val();
    let checkCaracteres = true;
    for (let i of frase) {
        if (arrayLetrasPermitidas.includes(i) === false) {
            alert("Informe uma frase válida!");
            alert("A frase deve estar em minusculo e não pode conter numeros ou acentuação");
            checkCaracteres = false;
            return 0;
        }
    }

    if (!frase || !(frase.toLowerCase() === frase) || !checkCaracteres) {
        alert("Informe uma frase válida!")
        alert("A frase deve estar em minusculo e não pode conter numeros ou acentuação");
    } else {
        var fraseDescriptografada = frase;
        let arrayTextReplace = [/ai/gi, /enter/gi, /imes/gi, /ober/gi, /ufat/gi];
        for (let i = 0; i < arrayTextReplace.length; i++) {
            let aux = fraseDescriptografada.replace(arrayTextReplace[i], arrayVogais[i]);
            fraseDescriptografada = aux;
        }
        let elementoPai = document.getElementById('content-history');
        let titulo = document.createElement('p')
        let texto = document.createTextNode(`Frase à ser Descriptografada "${frase}": ${fraseDescriptografada}`);
        titulo.appendChild(texto);
        elementoPai.appendChild(titulo);
        $('#frase').val('');
    }
});

botaoCopia.addEventListener('click', () => {
    // let frase = document.getElementById('frase');
    // frase.select();
    if (globalCriptografado) {
        navigator.clipboard.writeText(globalCriptografado);
        alert("Texto criptografado: " + globalCriptografado);
    } else {
        alert("Primeiro criptografe uma palavra ou texto");
    }
});