function main(){

    console.log('Sequência:')
    sequencia()
}

function sequencia(){
    let valor_i = 1
    
    for(let j = 60; j >= 0; j -= 5){

        valor_i += 3
        console.log(`I = ${valor_i-3}  j = ${j}`)
    }
}

main()