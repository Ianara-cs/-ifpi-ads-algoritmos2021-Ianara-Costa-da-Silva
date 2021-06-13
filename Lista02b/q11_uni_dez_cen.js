const input = require('prompt-sync')()

function main(){
    const numero = Number(input('Coloque um número(menor que 1000): '))

    const centena = Math.trunc(numero / 100)
    const dezena = Math.trunc((numero%100) / 10)
    const unidade = numero%10

    if(centena === 1){
        if(dezena === 0 || dezena === 1 && unidade === 0 || unidade === 1){
            console.log(`${numero} = ${centena} centena, ${dezena} dezena e ${unidade} unidade`)
        }else if(dezena > 1 && unidade > 1){
            console.log(`${numero} = ${centena} centena, ${dezena} dezenas e ${unidade} unidades`)
        }else if(dezena === 0 || dezena === 1 && unidade > 1){
            console.log(`${numero} = ${centena} centena, ${dezena} dezena e ${unidade} unidades`)
        }else if(dezena > 1 && unidade === 0 || unidade === 1){
            console.log(`${numero} = ${centena} centena, ${dezena} dezenas e ${unidade} unidade`)
        }
    }else if(centena > 1){
        if(dezena === 0 || dezena === 1 && unidade === 0 || unidade === 1){
            console.log(`${numero} = ${centena} centenas, ${dezena} dezena e ${unidade} unidade`)
        }else if(dezena > 1 && unidade > 1){
            console.log(`${numero} = ${centena} centenas, ${dezena} dezenas e ${unidade} unidades`)
        }else if(dezena === 0 || dezena === 1 && unidade > 1){
            console.log(`${numero} = ${centena} centenas, ${dezena} dezena e ${unidade} unidades`)
        }else if(dezena > 1 && unidade === 0 || unidade === 1){
            console.log(`${numero} = ${centena} centenas, ${dezena} dezenas e ${unidade} unidade`)
        }
    }else if(centena === 0){
        if(dezena === 0 || dezena === 1 && unidade === 0 || unidade === 1){
            console.log(`${numero} = ${dezena} dezena e ${unidade} unidade`)
        }else if(dezena > 1 && unidade > 1){
            console.log(`${numero} = ${dezena} dezenas e ${unidade} unidades`)
        }else if(dezena === 0 || dezena === 1 && unidade > 1){
            console.log(`${numero} = ${dezena} dezena e ${unidade} unidades`)
        }else if(dezena > 1 && unidade === 0 || unidade === 1){
            console.log(`${numero} = ${dezena} dezenas e ${unidade} unidade`)
        }
    }
    
}
main()