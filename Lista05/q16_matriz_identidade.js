const { nova_matriz_quadrada } = require('./matriz_utils')

const input = require('prompt-sync')()

function main(){
    const ordem = Number(input('Ordem da matriz quadrada: '))

    const matriz = nova_matriz_quadrada(ordem)

    for(let linha = 0; linha < ordem; linha++){
        for(let coluna = 0; coluna < ordem; coluna++){
            if(linha === coluna){
                matriz[linha][coluna] = 1
            }else{
                matriz[linha][coluna] = 0
            }
        }
    }

    console.log('Matriz identidade de ordem',ordem)
    console.log(matriz)
}

main()