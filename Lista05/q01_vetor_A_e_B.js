const input = require('prompt-sync')()

function main(){
    const n = Number(input('Quantidade de elementos: '))
    
    const vetor_a = Array(n)
    const vetor_b = Array(n)

    for(let i = 0; i < n; i++){
        vetor_a[i] = Number(input(`Elemento ${i}: `))
    }

    let j = vetor_b.length -1 
    for(item of vetor_a){
        vetor_b[j] = item
        j--
    }

    console.log(vetor_a)
    console.log(vetor_b)
    
}
main()