const input = require('prompt-sync')()

function main(){
    
    let nota1 = Number(input('Nota 1: '))
    while(valida_nota(nota1)){
        nota1 = Number(input('Nota inválida -- Coloque novamente: '))
    }
    let nota2 = Number(input('Nota 2: '))
    while(valida_nota(nota2)){
        nota2 = Number(input('Nota inválida -- Coloque novamente: '))
    }
    const media = (nota1 + nota2) / 2 
    console.log(`Média Semestral: ${media}`) 

}

function valida_nota(nota){
    if(nota < 0){
        return true
    }else if(nota > 10){
        return true
    }else{
        return false
    }
}

main()