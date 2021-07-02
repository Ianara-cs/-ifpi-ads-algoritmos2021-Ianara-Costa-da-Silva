const input = require('prompt-sync')()

function main(){
    const nome = input('Nome completo: ')

    let nome_f = sobrenome_final(nome)
    let nome_i = nome_inicial(nome)
    
    console.log(nome_f+'/'+nome_i)
}

function nome_inicial(nome){
    let nome_i = ''
    let caractere = ''
    let posicao = 0
    
    for(let i = nome.length - 1; i >= 0; i--){
        caractere = nome[i]
        let prox_caractere = nome[i + 1]
        if(caractere === ' ' && caractere < prox_caractere){
            posicao = i
        }
    }

    let quantidade = 0

    for(let i = posicao; i >= 0; i--){
        caractere = nome[quantidade]
        nome_i += caractere
        quantidade++

    }
    return nome_i
}

function sobrenome_final(nome){
    let nome_f = ''
    let caractere = ''
    let posicao = 0
    
    for(let i = 0; i < nome.length; i++){
        caractere = nome[i]
        let prox_caractere = nome[i + 1]
        if(caractere === ' ' && caractere < prox_caractere){
            posicao = i
        }
    }

    let quantidade = posicao + 1

    for(let i = nome.length - 1; i > posicao; i--){
        caractere = nome[quantidade]
        nome_f += caractere
        quantidade++

    }

    if(posicao !== 0){
        return nome_f
    }else{
        return nome
    }

}


main()