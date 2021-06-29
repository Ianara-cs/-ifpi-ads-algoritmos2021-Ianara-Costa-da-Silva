const input = require('prompt-sync')()

function main(){
    const num_a = Number(input('Número A: '))
    const num_b = Number(input('Número B: '))

    let mdc = 1
    let num = 2

    while(num <= num_a && num <= num_b){

        if(num_a % num === 0 && num_b % num === 0){
            mdc = num
        }
        
        num++
        
    }     

    console.log(`MDC de ${num_a} e ${num_b} é ${mdc}`)

}
main()