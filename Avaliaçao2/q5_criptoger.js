
const input = require('prompt-sync')()

function main(){
    const frase = input('Frase: ')
    const metade =  Math.trunc(frase.length / 2)
    let metade1 = ''
    let metade2 = ''

    for(let i = 0; i < frase.length; i++ ){
        if(i < metade){
            metade1 +=  frase[i]
        }else{
            metade2 += frase[i]
        }
    }

    let etapa1 = frase_invertida(metade1, metade2)
    let etapa2 = vogal_para_numero(etapa1)
    let etapa3 = numero_para_asterisco(etapa2)
    let etapa4 = deslocar_consoante(etapa3)
    
    //console.log(etapa1)
    //console.log(etapa2)
    //console.log(etapa3)
    console.log(etapa4)
}

function frase_invertida(metade1, metade2){
    let texto1 = inverter_Texto(metade1)
    let texto2 = inverter_Texto(metade2)

    return texto1 + texto2
}

function vogal_para_numero(frase){
    let nova_frase = ''
    for(let i = 0; i < frase.length; i++ ){
        if(frase[i] === 'a'){
            nova_frase += '1'
        }else if(frase[i] === 'e'){
            nova_frase += '2'
        }else if(frase[i] === 'i'){
            nova_frase += '3'
        }else if(frase[i] === 'o'){
            nova_frase += '4'
        }else if(frase[i] === 'u'){
            nova_frase += '5'
        }else {
            nova_frase += frase[i]
        }
    }
    return nova_frase
}

function numero_para_asterisco(frase){
    let nova_frase = ''
    for(let i = 0; i < frase.length; i++ ){
        if(frase[i] === '1'){
            nova_frase += '*'
        }else if(frase[i] === '2'){
            nova_frase += '**'
        }else if(frase[i] === '3'){
            nova_frase += '***'
        }else if(frase[i] === '4'){
            nova_frase += '****'
        }else if(frase[i] === '5'){
            nova_frase += '*****'
        }else if(frase[i] === '6'){
            nova_frase += '******'
        }else if(frase[i] === '7'){
            nova_frase += '*******'
        }else if(frase[i] === '8'){
            nova_frase += '********'
        }else if(frase[i] === '9'){
            nova_frase += '*********'
        }else if(frase[i] === '0'){
            nova_frase += '#'
        }else{
            nova_frase += frase[i]
        }
    }
    return nova_frase
}

function inverter_Texto(texto){
    let nova_mensagem = ''

    for(let i = texto.length - 1; i >= 0; i--){
        nova_mensagem += texto[i]
    }
    return nova_mensagem
}



function deslocarNaTabelaASCII(caractere, pos){

    const codigo = codigoASCII(caractere)
    const novo_codigo = codigo + pos
    const nova_caractere = deASCIIparaCaractere(novo_codigo)

    return nova_caractere
}

function deASCIIparaCaractere(codigo){
    return String.fromCharCode(codigo)
}

function deslocar_consoante(frase){
    let nova_mensagem = ''

    for(caractere of frase){
        if(eh_letra(caractere)){
            const caractere_deslocada = deslocarNaTabelaASCII(caractere, 10)
            nova_mensagem += caractere_deslocada
        }else{
            nova_mensagem += caractere
        }
    }

    return nova_mensagem
}

function eh_letra(caractere){
    const codigo = codigoASCII(caractere)

    return(codigo >= 65 && codigo <= 90 || codigo >= 97 && codigo <= 122)
}

function codigoASCII(caractere){
    return caractere.charCodeAt(0)
}

main()



