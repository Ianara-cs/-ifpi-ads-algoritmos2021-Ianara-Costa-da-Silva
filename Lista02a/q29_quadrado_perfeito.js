const input = require('prompt-sync')()

function main(){

    const numero = Number(input('Coloque um número com quatro dígitos: '))

    const quadrado_perfeito = resultado(numero)

    if(quadrado_perfeito && numero >= 1000){ 
        console.log(`O ${numero} é um quadrado perfeito`)
    }else{
        console.log(`O ${numero} não é um quadrado perfeito `)

    }

}

function resultado(num){
    const raiz = Math.sqrt(num)
    const dezena_1 = parseInt(num / 100)
    const dezena_2 = num % 100
    return raiz === dezena_1 + dezena_2
}
main()