const input = require('prompt-sync')()

function main(){

    const numero = Number(input('Coloque um número: '))

    if(inteiro(numero)){
        console.log(`${numero} é inteiro`)
    }else{
        console.log(`${numero} é decimal`)
    }

}

function inteiro(num){
    if((Math.trunc(num)) === num){
        return true
    }
}
main()