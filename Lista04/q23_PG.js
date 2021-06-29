const input = require('prompt-sync')()

function main(){
    const razao_pg = Number(input('Razão da PG: '))
    let primeiro_termo = Number(input('Primeiro termo: '))
    let n_termos = Number(input('Número de termos: '))
    let quantidade = n_termos + 1

    let termo_geral = 0

    while(n_termos > 0){

        let calculo = primeiro_termo * Math.pow(razao_pg, n_termos - 1)
        termo_geral = calculo

        n_termos--
        quantidade--
        console.log( `Termo ${quantidade} = ${termo_geral}`)
    }

}

main()