const input = require('prompt-sync')()

function main(){
    const qtd_de_elementos = 4
    const vetor_a = Array(qtd_de_elementos)

    for(let i = 0; i < qtd_de_elementos; i++){
        vetor_a[i] = Number(input(`Elemento ${i}: `))
    }

    const valor_de_S = calcular_valor_de_S(vetor_a)

    console.log('Valor de S =', valor_de_S)
}

function calcular_valor_de_S(vetor_a){
    let valor_de_S = 0

    let j = vetor_a.length - 1

    for(let i = 0; i < vetor_a.length / 2; i++){
        valor_de_S += (vetor_a[i] - vetor_a[j]) ** 2
        j--
    }
    return valor_de_S
    
}

main()