const input = require ('prompt-sync')()

function main(){
     console.log('### Números Iguais ###')

    const num1 = Number(input('Primeiro número: '))
    const num2 = Number(input('Segundo número: '))
    const num3 = Number(input('Terceiro número: '))

    if(eh_igual(num1, num2, num3)){
        console.log('Três Números iguais')
    }else if(num1 === num2){
        console.log('Dois Números iguais')
    }else if(num2===num3){
        console.log('Dois Números iguais')
    }else if(num1===num3){
        console.log('Dois Números iguais')
    }else{
        console.log('Nenhum Número igual')
    }
    
}
function eh_igual(valor1, valor2, valor3){
    return (valor1===valor2) && (valor1 === valor3)
        
}

main()