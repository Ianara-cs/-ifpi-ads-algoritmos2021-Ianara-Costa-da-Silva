function contem_repetidos(vetor){
    let elemento
    let contador
    for(let i = 0; i < vetor.length; i++){
        elemento = vetor[i]
        contador = contar_elemento(vetor, elemento)
        
        if(contador > 1){
            return true
        }
    }

    return false

}

function contar_elemento(vetor, elemento){
    let contador = 0
    for(let j = 0; j < vetor.length; j++){
        if(elemento === vetor[j]){
            contador++
        }
    }
    return contador
}

function maior_valor(n, vetor_a){
    let posicao_maior = 0
    
    
    for(let i = 0; i < n; i++){
        if(vetor_a[i] > vetor_a[posicao_maior] ){
            posicao_maior = i
        }
    }
    let valor_maior = vetor_a[posicao_maior]
    return valor_maior
}

function menor_valor(n, vetor_a){
    let posicao_menor = 0

    for(let i = 0; i < n; i++){
        if(vetor_a[i] < vetor_a[posicao_menor] ){
            posicao_menor = i
        }
    }
    let valor_menor = vetor_a[posicao_menor]
    return valor_menor
}

function media(vetor_a, n){
    let soma = 0
    for(let i = 0; i < n; i++){
       soma += vetor_a[i]
    }

    let media = soma / n
    return media
}

function quantidade_positivo(n, vetor){
    let quantidade = 0
    for(let i = 0; i < n; i++){
        if(vetor[i] > 0){
            quantidade++
        }
    }
    return quantidade
}

function quantidade_negativo(n, vetor){
    let quantidade = 0
    for(let i = 0; i < n; i++){
        if(vetor[i] < 0){
            quantidade++
        }
    }
    return quantidade
}

module.exports = {
    contem_repetidos, maior_valor, menor_valor, media, quantidade_positivo, quantidade_negativo,
}