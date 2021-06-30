const input = require('prompt-sync')()

function main(){
    const palavra = input('Palavra: ')

    verificar_se_e_palindroma(palavra)
}

function inverter_palavra(palavra){
    let nova_palavra = ''
    let caractere = ''

    for(let i = palavra.length - 1; i >= 0; i--){
        caractere = palavra[i]
        nova_palavra += caractere
    }
    return nova_palavra
}

function verificar_se_e_palindroma(palavra){
    if(palavra === inverter_palavra(palavra)){
        console.log(`A palavra '${palavra}' é palíndroma `)
    }else{
        console.log(`A palavra '${palavra}' não é palíndroma`)
    }
}

main()