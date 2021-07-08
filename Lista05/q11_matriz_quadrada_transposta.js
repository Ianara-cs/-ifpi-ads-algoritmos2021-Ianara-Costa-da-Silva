const { nova_matriz_quadrada } = require('./matriz_utils')

const input = require('prompt-sync')()

function main(){
    const ordem = Number(input('Ordem da matriz quadrada: '))

    const matriz = nova_matriz_quadrada(ordem)

    for(let linha = 0; linha < ordem; linha++){
        for(let coluna = 0; coluna < ordem; coluna++){
            matriz[linha][coluna] = Number(input(`Valor L:${linha}-C:${coluna}: `))
        }
    }

    const nova_matriz = matriz_transposta(ordem, matriz)

    console.log('Matriz quadrada de ordem', ordem)
    console.log(matriz)
    console.log('Matriz transposta')
    console.log(nova_matriz)

}

function matriz_transposta(ordem, matriz){
    const nova_matriz  = nova_matriz_quadrada(ordem)
    for(let linha = 0; linha < ordem; linha++){
        for(let coluna = 0; coluna < ordem; coluna++){
            nova_matriz[coluna][linha] = matriz[linha][coluna]
        }
    }
    return nova_matriz
}

main()
