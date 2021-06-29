const input = require('prompt-sync')()

function main(){
    console.log('Saber quantos anos a cidade A vai ultrapassar a cidade B em populaçao')

    let populacao_A = 200000
    let populacao_B = 800000
    let quantidade_anos = 0

    while(populacao_A <= populacao_B){

        let taxa_de_a = (3.5 / 100) * populacao_A
        let taxa_de_b = (1.35 / 100) * populacao_B

        populacao_A = populacao_A + taxa_de_a
        populacao_B = populacao_B + taxa_de_b
        quantidade_anos++
    }

    console.log(quantidade_anos, 'Anos')

}

main()