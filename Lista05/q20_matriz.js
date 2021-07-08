const { nova_matriz_quadrada } = require('./matriz_utils')

function main(){
    const ordem = 5

    const matriz = nova_matriz_quadrada(ordem)
    let elemento = 1

    for(let linha = 0; linha < ordem; linha++){
        for(let coluna = 0; coluna < ordem; coluna++){
            
            matriz[linha][coluna] = elemento
            elemento++
        }
    }
    
    console.log(matriz)
}

main()