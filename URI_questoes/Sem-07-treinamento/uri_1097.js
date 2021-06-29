function main(){

    console.log('Sequência: ')
    sequencia()

}

function resultado(valor1, valor2){
    let valor_i = valor1
    let valor_j = valor2
    
    for(let i = 1; i <= 3; i++){
        valor_i = valor_i
        valor_j--
        console.log(`I = ${valor_i}  j = ${valor_j}`)
    }
}
function sequencia(){
    let valor1 = 1
    let valor2 = 8

    for(let i = 1; i <= 5; i++){
        resultado(valor1, valor2)

        valor1 += 2
        valor2 += 2


    } 
}



main()