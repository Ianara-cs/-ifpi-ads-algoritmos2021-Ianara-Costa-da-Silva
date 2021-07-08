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

    let diagonal_principal = soma_da_diagonal_principal(matriz, ordem)
    let diagonal_secundaria = soma_da_diagonal_secundaria(matriz, ordem)
    let outros_elementos = soma_dos_outos_elemnetos(matriz, ordem)
    console.log('Soma da diagonal prncipal:', diagonal_principal)
    console.log('Soma da diagonal secundária:', diagonal_secundaria)
    console.log('Soma dos elementos que não estão nas diagonais somadas:', outros_elementos)
}

function soma_da_diagonal_principal(matriz, ordem){
    let soma = 0
    for(let linha = 0; linha < ordem; linha++){
        for(let coluna = 0; coluna < ordem; coluna++){
            if(coluna === linha){
                soma += matriz[linha][coluna]
            }
        }
    }
    return soma
}

function soma_da_diagonal_secundaria(matriz, ordem){
    let soma = 0
    let coluna = ordem - 1
    for(let linha = 0; linha < ordem; linha++){
        soma += matriz[linha][coluna]
        coluna--
    }
    return soma
}

function soma_dos_outos_elemnetos(matriz, ordem){
    let soma = 0
    for(let linha = 0; linha < ordem; linha++){
        let i = 0
        let j = ordem - 1
        for(let coluna = ordem - 1; coluna >= 0; coluna--){
            if(coluna === linha){
                soma
            }else if(i === linha && j === coluna){
                soma
            }else{
                soma += matriz[linha][coluna]
            }
            i++
            j--
        }
    }
    return soma
}


main()