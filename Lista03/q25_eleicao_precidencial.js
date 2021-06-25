const input = require('prompt-sync')()

function main(){
    const qts_de_eleitores = Number(input('Quantidade de eleitores: '))

    let candidato1 = 0
    let candidato2 = 0
    let candidato3 = 0

    let voto_nulo = 0
    let voto_branco = 0

    for(let i =1; i <= qts_de_eleitores; i++){
        console.log('Candidato 1 vote "1", Candidato 2 vote "2", Candidato 3 vote "3" \n Voto branco "0" , Voto nulo "9"')
        let voto = Number(input('Seu voto é - '))

        if(voto === 1){
            candidato1 = candidato1 + 1
        }else if(voto === 2){
            candidato2 = candidato2 + 1
        }else if(voto === 3){
            candidato3 = candidato3 + 1
        }else if(voto === 9){
            voto_nulo = voto_nulo + 1
        }else if(voto === 0){
            voto_branco = voto_branco + 1
        }
    }

    let vencedor = saber_quem_ganhou(candidato1, candidato2, candidato3)

    console.log(' ### Resultado da eleição ###')
    console.log('-------------------------------')
    console.log(`Candidato 1 recebeu ${candidato1} votos`)
    console.log(`Candidato 2 recebeu ${candidato2} votos`)
    console.log(`Candidato 3 recebeu ${candidato3} votos`)
    console.log(`Total de votos nulos: ${voto_nulo}`)
    console.log(`Total de votos brancos: ${voto_branco}`)
    console.log(`-------------------- \n ${vencedor}`)
    
}

function saber_quem_ganhou(candidato1, candidato2, candidato3){
    if(candidato1 > candidato2 && candidato1 > candidato3){
        return 'Canditado 1 ganhou'
    }else if(candidato2 > candidato3 && candidato2 > candidato1){
        return 'Canditado 2 ganhou'
    }else if(candidato3 > candidato2 && candidato3 > candidato1){
        return 'Canditado 3 ganhou'
    }else{
        return 'Há um empate que será decidido no segundo turno'
    }
}


main()