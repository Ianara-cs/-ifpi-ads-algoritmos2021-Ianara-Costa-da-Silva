const input = require('prompt-sync')()

function main(){
    const frase = input('Frase: ')

    frase_sem_espaco(frase)

}

function eh_espaco(caractere){
    let codigo = caractere.charCodeAt(0)
    if(codigo === 32){
        return true
    }else{
        return false
    }

}

function frase_sem_espaco(frase){
    let nova_frase = ''
    let caractere = ''

    for(let i = 0; i < frase.length; i++){
        caractere = frase[i]
        if(eh_espaco(caractere)){
            continue
        }else{
            nova_frase += caractere
        }
    }

    console.log(nova_frase)
}

main()