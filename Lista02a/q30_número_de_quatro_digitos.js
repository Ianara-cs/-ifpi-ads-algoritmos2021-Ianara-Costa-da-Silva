const input = require('prompt-sync')()

function main(){
    
    const numero = Number(input('Coloque um número de quatro dígitos: '))

    const resultado = efetuacao(numero)

    if(resultado >= 1000 && resultado <= 9999 ){
        console.log('Obedece a característica')
    }else{
        console.log('Não obedece essa característica')
    }

}

function efetuacao(num){
    const milhar_cetena = parseInt(num / 100)
    const dezena_unidade = num % 100
    const soma = milhar_cetena + dezena_unidade
    return (soma ** 2)
}
main()