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

    resultado(matriz, ordem)
    
}

function resultado(matriz, ordem){
    let soma_dos_positivos = 0
    let soma_dos_negativos = 0
    for(let linha = 0; linha < ordem; linha++){
        for(let coluna = 0; coluna < ordem; coluna++){
            if(matriz[linha][coluna] > 0){
                soma_dos_positivos += matriz[linha][coluna]
            }else if(matriz[linha][coluna] < 0){
                soma_dos_negativos += matriz[linha][coluna]
            }
        }
    }
    
    console.log(`Soma dos números positivos: ${soma_dos_positivos} \nSoma dos número negativos ${soma_dos_negativos}`)
}

main()