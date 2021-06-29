const input = require('prompt-sync')()

function main(){
    const frase = input('Frase: ')

    const frase_final = resultado(frase)

    console.log(frase_final)
}

function resultado(frase){
    let caractere = ''
    let nova_frase = ''

    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        if(eh_algarismo(caractere)){
            nova_frase += substituicao_do_algarismo(caractere)
        }else{
            nova_frase += caractere
        }
    }
    return nova_frase
}

function eh_algarismo(caractere){
    const codigo = caractere.charCodeAt(0)
    if(codigo >= 48 && codigo <= 57){
        return true
    }else{
        return false
    }
}

function substituicao_do_algarismo(caractere){
    const codigo = caractere.charCodeAt(0)
    let algarismo_por_extenso = ''

    if(codigo === 48){
        algarismo_por_extenso = 'zero'
    }else if(codigo === 49){
        algarismo_por_extenso = 'um'
    }else if(codigo === 50){
        algarismo_por_extenso = 'dois'
    }else if(codigo === 51){
        algarismo_por_extenso = 'três'
    }else if(codigo === 52){
        algarismo_por_extenso = 'quatro'
    }else if(codigo === 53){
        algarismo_por_extenso = 'cinco'
    }else if(codigo === 54){
        algarismo_por_extenso = 'seis'
    }else if(codigo === 55){
        algarismo_por_extenso = 'sete'
    }else if(codigo === 56){
        algarismo_por_extenso = 'oito'
    }else if(codigo === 57){
        algarismo_por_extenso = 'nove'
    }
    return algarismo_por_extenso

}

main()