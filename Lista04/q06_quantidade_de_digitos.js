const input = require('prompt-sync')()

function main(){
    const num = Number(input('Número: '))

    let quantidade = 0
    let resultado = num / 10

    
    while(resultado > 0){
         
        resultado = Math.trunc(resultado) / 10
        quantidade = quantidade + 1
    }
    
    if(quantidade === 1){
        console.log(`O número ${num} tem ${quantidade} dígito`)
    }else{
        console.log(`O número ${num} tem ${quantidade} dígitos`)
    }

}

main()