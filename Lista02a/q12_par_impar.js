const input = require('prompt-sync')()

function main(){

    const num = Number(input('Número: '))

    const resultado = eh_par(num)
    console.log(resultado)


}

function eh_par(num){
    if(num%2 === 0){
        return 'É par'
    }else{
        return 'É ímpar'
    }
}
main()