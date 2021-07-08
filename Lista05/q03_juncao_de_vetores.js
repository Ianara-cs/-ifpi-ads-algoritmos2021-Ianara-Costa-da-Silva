const { uniao_de_vetores } = require('./vetor_utils')

const input = require('prompt-sync')()

function main(){
    const n = Number(input('Quantidade de elementos: '))
    
    const vetor_a = Array(n)
    const vetor_b = Array(n)
     
    for(let i = 0; i < n; i++){
        vetor_a[i] = Number(input(`Elemento ${i}(vetor A): `))
        vetor_b[i] = Number(input(`Elemento ${i}(vetor B): `))
    }
    const vetor_c = uniao_de_vetores(vetor_a, vetor_b, n)
    
    console.log(vetor_c)
}
main()