const input = require('prompt-sync')()

function main(){
    console.log('Para adição "+" \nPara subtração "-" \nPara multiplicaçao "x" \nPara divisão "/"')

    const tipo = input('Escolha: ')
    const tabuada = Number(input('Tabuada de qual número: '))
    
    for(let i = 1; i <= 10 ; i++){

        if(tipo === "+"){
            let resultado = tabuada_de_mais(tabuada, i)
            console.log(`${tabuada} + ${i} = ${resultado} `)

        }else if(tipo === '-'){
            let resultado = tabuada_de_menos(tabuada, i)
            console.log(`${tabuada} - ${i} = ${resultado} `)

        }else if(tipo === 'x' || tipo === 'X'){
            let resultado = tabuada_de_multiplicacao(tabuada, i)
            console.log(`${tabuada} x ${i} = ${resultado} `)

        }else if(tipo === '/'){
            let resultado = tabuada_de_divisao(tabuada, i)
            let resto = tabuada % i
            console.log(`${tabuada} / ${i} = ${parseInt(resultado)}  ${resto} `)
        }

    }

}

function tabuada_de_mais(tabuada, i){
    return tabuada + i
}

function tabuada_de_menos(tabuada, i){
    return tabuada - i
}

function tabuada_de_multiplicacao(tabuada, i){
    return tabuada * i
}

function tabuada_de_divisao(tabuada, i){
    return tabuada / i
}

main()