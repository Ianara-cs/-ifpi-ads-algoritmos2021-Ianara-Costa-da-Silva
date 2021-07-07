const { eh_letra_Mauscula } = require("../../Strings/strings_utils")
const { ObterTexto } = require("../../Strings/utils")

function main(){
    const nome = ObterTexto('Nome completo: ')

    const split = nome.split(' ')
    let nome_inicial = nome_final_da_bio(split)
    let abreviatura = primeiras_letras_do_nome(nome)
    
    console.log(`${nome_inicial}, ${abreviatura}`)
}

function nome_final_da_bio(split){
    let nome_final = ''
    for(let i = split.length - 1; i >=0; i--){
        if(i === split.length - 1){
            nome_final = split[i]
        }else{
            nome_final
        }
    }
    return nome_final
}

function primeiras_letras_do_nome(nome){
    let primeiras_letras = ''

    for(let i = 0; i < posicao_do_nome_final(nome); i++){
        let caractere = nome[i]
        if(eh_letra_Mauscula(caractere)){
            primeiras_letras += caractere + '.'
        }
    }
    return primeiras_letras
}

function posicao_do_nome_final(nome){
    let caractere = ''
    let posicao = 0
    
    for(let i = 0; i < nome.length; i++){
        caractere = nome[i]
        let prox_caractere = nome[i + 1]
        if(caractere === ' ' && caractere < prox_caractere){
            posicao = i
        }
    }
    return posicao
}
main()