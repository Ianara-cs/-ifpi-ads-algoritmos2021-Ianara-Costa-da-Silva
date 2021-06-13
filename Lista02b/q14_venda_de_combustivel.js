const input = require('prompt-sync')()

function main(){
    const litros = Number(input('Quantidade de litros: '))
    const tipo = input('Tipo de combustíve(A-álcool, G-gasolina): ')

    const preco_A = 1.9
    const preco_G = 2.5
    const total_A = preco_A * litros
    const total_G = preco_G * litros


    if(tipo === 'A' || tipo === 'a' &&  litros <= 20){
        const preco_final = total_A - (desconto(total_A, 3))
        console.log(`Valor a ser: R$ ${preco_final.toFixed(2)}`)
        
    }else if(tipo === 'A' || tipo === 'a' && litros > 20){
        const preco_final = total_A - (desconto(total_A, 5))
        console.log(`Valor a ser: R$ ${preco_final.toFixed(2)}`)

    }else if(tipo === 'G' || tipo === 'g' && litros <= 20){
        const preco_final = total_G - (desconto(total_G, 4))
        console.log(`Valor a ser: R$ ${preco_final.toFixed(2)}`)
        
    }else if(tipo === 'G' || tipo === 'g' && litros > 20){
        const preco_final = total_G - (desconto(total_G, 6))
        console.log(`Valor a ser: R$ ${preco_final.toFixed(2)}`)

    }else{
        console.log('Opção inválida')
    }
    

}

function desconto(preco, percen){
    return preco * percen / 100
}


main()