const input = require('prompt-sync')()

function main(){
    let num_prova = Number(input('Número de prova: '))
    let quant_nadadores = Number(input('Quantidade de nadadores: '))
    
    let pontos_a = 0
    let pontos_b = 0

    while(num_prova !== 0 || quant_nadadores !== 0){

        let contador = 0

        while(quant_nadadores > contador){

            console.log(`Nadador ${contador + 1}/${quant_nadadores}`)
            const nome = input('Nome: ')
            const classificacao = Number(input('Classificação: '))
            const tempo = Number(input('Tempo(s): '))
            const clube = input('Clube: ')

            let pontos = calcular_pontuacao(classificacao)
            
            if(clube === 'a'){
                pontos_a += pontos
            }else{
                pontos_b += pontos
            }

            contador++
        }
        
        num_prova = Number(input('Número de prova: '))
        quant_nadadores = Number(input('Quantidade de nadadores: '))

    }

    console.log('***** NATAÇÃO ******')
    console.log('---------------------')
    console.log(`Pontos total do clube A: ${pontos_a} `)
    console.log(`Pontos total do clube B: ${pontos_b} `)

    console.log('Resultado: ---')
    if(pontos_a > pontos_b){
        console.log('O clube A é vencedor.')
    }else if(pontos_b > pontos_a){
        console.log('O clube B é vencedor.')
    }else{
        console.log('Os dois clubes empataram')
    }
}

function calcular_pontuacao(classificacao){
    if(classificacao === 1 ){
        return 9   
    }else if(classificacao === 2 ){
        return 6
    }else if(classificacao === 3 ){
       return 4
    }else if(classificacao === 4 ){
       return 3
    }else{
        return 0
    }
}

main()