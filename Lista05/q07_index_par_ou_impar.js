const input = require('prompt-sync')()

function main(){
    const n = Number(input('Quantidade de elementos: '))
    
    const vetor_a = Array(n)
    const vetor_b = Array(n)
     
    for(let i = 0; i < n; i++){
        vetor_a[i] = Number(input(`Elemento ${i}(vetor A): `))
        if(i % 2 === 0 ){
            vetor_b[i] = 0
        }else{
            vetor_b[i] = 1
        }
    }
    console.log(`Vetor B: [${vetor_b}]`)
}

main()