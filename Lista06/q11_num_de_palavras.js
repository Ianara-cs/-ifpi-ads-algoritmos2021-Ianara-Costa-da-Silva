const input = require('prompt-sync')()

function main(){
    const frase = input('Frase: ')

    quantidade_de_palavras(frase)

}

function quantidade_de_palavras(frase){
    let quantidade = 1
    
    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        let prox_caractere = frase[i + 1]
        if(caractere === ' ' && caractere < prox_caractere){
            quantidade++
        }else{ }
    }
    console.log( quantidade)
}


main()