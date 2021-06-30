const input = require('prompt-sync')()

function main(){

    const frase = input('Frase: ')

    caractere_duplicada(frase)

}

function caractere_duplicada(frase){
    let caractere = ''
    let nova_frase = ''

    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        nova_frase += caractere + caractere
    }
    console.log('Nova frase:',nova_frase)
}


main()