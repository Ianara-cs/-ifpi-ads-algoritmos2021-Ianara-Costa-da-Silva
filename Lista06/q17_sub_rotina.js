const input = require('prompt-sync')()

function main(){
    const texto = input('Texto: ')
    substr(texto, 1, 3)

}

function substr(texto, pos_inicial, quantidade){
    let novo_texto = ''
    let caractere = ''
    
    for(let i = pos_inicial; i <= quantidade; i++ ){
        caractere = texto[i]
        novo_texto += caractere
    }
    console.log(novo_texto)

}

main()