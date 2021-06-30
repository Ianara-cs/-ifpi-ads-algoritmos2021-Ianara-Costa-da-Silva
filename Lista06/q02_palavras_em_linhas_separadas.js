const input = require('prompt-sync')()

function main(){
    const frase = input('Frase: ')

    palavra_em_outra_linha(frase)

}

function palavra_em_outra_linha(frase){
    let caractere = ''
    let palavra_separada = ''
    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        if(caractere === ' '){
            palavra_separada += '\n'
        }else{
            palavra_separada += caractere
            
        }
    }
    console.log(palavra_separada)
}

main()