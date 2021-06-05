const input = require('prompt-sync')()

function main(){
    const num1 = Number(input('Valor 1: '))
    const num2 = Number(input('Valor 2: '))

    const resto = num1%num2
    const soma = (num1 + num2)

    if(resto ===1){
        console.log(`Soma: ${soma} Resto da divisão: ${resto}`)

    }else if(resto===2){
        if(num1%2 === 0){
            console.log('Valor 1 é par')
        }  
        if(num2%2 === 0){
            console.log('Valor 2 é par')
        }   
        if(!(num1%2===0)){
            console.log('Valor 1 é ímpar')
        }    
        if(!(num2%2===0)){
            console.log('Valor 2 é ímpar')
        }

    }else if(resto === 3){
        const multi = soma * num1
        console.log(multi)

    }else if(resto === 4){
        const divi = soma / (num2!=0)
        console.log(divi)

    }else{
       const q1 = Math.pow(num1, 2) 
       const q2 = Math.pow(num2, 2)

        console.log(`O quadrado do valor 1 é ${q1} e o valor 2 é ${q2}`)
    } 
}
main()