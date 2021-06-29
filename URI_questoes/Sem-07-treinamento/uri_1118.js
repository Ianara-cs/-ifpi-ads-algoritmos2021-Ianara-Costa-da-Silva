const input = require('prompt-sync')()

function main(){
    let valor_x = 1
    while(valor_x === 1){
        let nota1 = Number(input('Nota 1: '))

        while(validar_nota(nota1)){
            nota1 = Number(input('Nota inválida -- Coloque novamente: '))
        }

        let nota2 = Number(input('Nota 2: '))

        while(validar_nota(nota2)){
            nota2 = Number(input('Nota inválida -- Coloque novamente: '))
        }

        const media = (nota1 + nota2) / 2 
        console.log(`Média Semestral: ${media}`) 

        valor_x = Number(input('Novo calculo (1-Sim / 2-Não): '))
        let verificacao = caso_de_resposta_nao_valida(valor_x)
        valor_x = verificacao
    }
}

function validar_nota(nota){
    if(nota < 0){
        return true
    }else if(nota > 10){
        return true
    }else{
        return false
    }
}

function validar_resposta(valor){
    if(valor < 1){
        return true
    }else if( valor > 2){
        return true
    }else{
        return false
    }
}

function caso_de_resposta_nao_valida(valor){
    let valor_x = valor
    while(validar_resposta(valor_x)){
        valor_x = Number(input('Novo calculo (1-Sim / 2-Não): '))
    }
    return valor_x
}


main()