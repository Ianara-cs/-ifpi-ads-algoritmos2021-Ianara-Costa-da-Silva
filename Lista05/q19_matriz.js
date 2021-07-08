const { nova_matriz_quadrada } = require('./matriz_utils')

function main(){
    const ordem = 6

    const matriz = nova_matriz_quadrada(ordem)

    for(let linha = 0; linha < ordem; linha++){
        for(let coluna = 0; coluna < ordem; coluna++){
            matriz[linha][coluna] = 1
        }
    }

    for(let linha = 1; linha < 5; linha++){
        for(let coluna = 1; coluna < 5; coluna++){
            matriz[linha][coluna] = 2
        }
    }
    for(let linha = 2; linha < 4; linha++){
        for(let coluna = 2; coluna < 4; coluna++){
            matriz[linha][coluna] = 3
        }
    }

    console.log(matriz)
}

main()