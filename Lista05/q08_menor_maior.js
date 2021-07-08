const input = require('prompt-sync')()

function main(){
    const n = Number(input('Quantidade de elementos: '))
    
    const vetor_a = Array(n)
     
    for(let i = 0; i < n; i++){
        vetor_a[i] = Number(input(`Elemento ${i}: `))
    }

    let posicao_maior = 0
    let posicao_menor = 0

    for(let i = 0; i < n; i++){
        if(vetor_a[i] > vetor_a[posicao_maior] ){
            posicao_maior = i
        }else if(vetor_a[i] < vetor_a[posicao_menor]){
            posicao_menor = i
        }
    }

    console.log(`Maior elemento: ${vetor_a[posicao_maior]} (i: ${posicao_maior})`)
    console.log(`Manor elemento: ${vetor_a[posicao_menor]} (i: ${posicao_menor})`)

}

main()