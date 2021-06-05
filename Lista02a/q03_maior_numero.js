const input = require('prompt-sync')()

function main(){
    console.log('## Maior Número ##')

    const num1 = Number(input('Primeiro número: '))
    const num2 = Number(input('Segundo número: '))
    const num3 = Number(input('Terceiro número: '))

    if(maior(num1, num2, num3)){
        console.log(`${num1} é o maior número`)
    }else if(maior(num2, num1, num3)){
        console.log(`${num2} é o maior número`)
    }else{
        console.log(`${num3} é o maior número`)
    }
}

function maior(valo1, valor2, valor3){
    return (valo1 > valor2) && (valo1 > valor3)
        
    
    
}
main()