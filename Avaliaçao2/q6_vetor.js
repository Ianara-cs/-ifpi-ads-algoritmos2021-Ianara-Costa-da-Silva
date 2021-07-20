const { contem_repetidos, maior_valor, menor_valor, media, quantidade_positivo, quantidade_negativo } = require('./mudules')

const input = require('prompt-sync')()

function main(){
    const n = Number(input('Quantidade de elementos: '))
    
    const vetor_a = Array(n)

    for(let i = 0; i < n; i++){
        vetor_a[i] = Number(input(`Elemento ${i}: `))
    }

    console.log('Média dos valores:',media(vetor_a, n))
    console.log('Maior valor:',maior_valor(n, vetor_a))
    console.log('Menor valor:',menor_valor(n, vetor_a))
    console.log('Quantidade de positivos:',quantidade_positivo(n, vetor_a))
    console.log('Quantidade de negativos:',quantidade_negativo(n, vetor_a))
    
    valores_repetidos(vetor_a)
}

function valores_repetidos(vetor_a){
    if(contem_repetidos(vetor_a)){
        console.log('Há elementos repetidos')
    }else{
        console.log('Não há elementos repetidos')
    }
}
main()