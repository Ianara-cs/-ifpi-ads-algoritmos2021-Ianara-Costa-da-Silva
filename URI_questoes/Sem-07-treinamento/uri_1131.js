const input = require('prompt-sync')()

function main(){

    let valor_x = 1
    let partida_ganhada_inter = 0
    let partida_ganhada_gremio = 0
    let partida_empate = 0
    let quantidade = 0

    while(valor_x === 1){
        let gol_inter = Number(input('Inter: '))
        let gol_gremio = Number(input('Grêmio: '))

        if(gol_inter > gol_gremio){
            partida_ganhada_inter++
        }else if(gol_gremio > gol_inter){
            partida_ganhada_gremio++
        }else{
            partida_empate++
        }
        quantidade++
                
        valor_x = Number(input('Novo grenal (1-Sim / 2-Não): '))

        let verificacao = caso_de_resposta_nao_valida(valor_x)
        valor_x = verificacao
    }
    resultado(partida_ganhada_inter, partida_ganhada_gremio, partida_empate, quantidade)
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
        valor_x = Number(input('Novo grenal (1-Sim / 2-Não): '))
    }
    return valor_x
}

function resultado(dado1, dado2, dado3, quantidade){
    console.log(' ### Resultados ### \n-----------------------')
    if(quantidade === 1){
        console.log(`${quantidade} grenal`)
    }else{
        console.log(`${quantidade} grenais`)
    }
    console.log(`Inter: ${dado1}  \nGremio: ${dado2} \nEmpates: ${dado3}`)

    if(dado1 > dado2){
        console.log('Inter venceu mais')
    }else if(dado2 > dado3){
        console.log('Gremio venceu mais')
    }else{
        console.log('Quantidade de partidas ganhas foram iguais')
    }
}



main()