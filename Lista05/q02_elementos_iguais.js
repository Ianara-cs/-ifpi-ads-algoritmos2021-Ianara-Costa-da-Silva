const { contem_repetidos } = require('./vetor_utils')
const input = require('prompt-sync')()

function main(){
    const n = Number(input('Quantidade de elementos: '))
    
    const vetor_a = Array(n)

    for(let i = 0; i < n; i++){
        vetor_a[i] = Number(input(`Elemento ${i}: `))
    }

    if(contem_repetidos(vetor_a)){
        console.log('Há elementos repetidos')
    }else{
        console.log('Não há elementos repetidos')
    }

}

main()