const input = require('prompt-sync')()

function main(){
    const valor_N = Number(input('Valor N: '))

    console.log('Todos os valores que quando é dividido por', valor_N, 'resta 2')
    
    let total = 0
    for(let i = 1; i <= 1000; i++){

        if(i % valor_N === 2){
            total = i
            console.log(total)
        }
    }  
}


main()