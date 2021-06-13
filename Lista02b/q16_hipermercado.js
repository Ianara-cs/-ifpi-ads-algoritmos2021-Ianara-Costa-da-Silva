const input = require('prompt-sync')()

function main(){

    const tipo = input('Coloque o tipo da carne: ')
    const quantidade = Number(input('Quantidade da carne(kg): '))
    const forma_pagamento = input('Forma de pagamento(ct - para catão Tabajara e d - dinheiro ): ')

    const preço_total = (preco_carne(tipo, quantidade))


    if(forma_pagamento === 'ct'){
        const preço_com_desconto = preço_total - (desconto(preço_total, 5))

        console.log(' ##### Hipermercado Tabajara #####')
        console.log('   Cumpo Fiscal')
        console.log(`Tipo de carne: ${tipo}`)
        console.log(`Quantidade de carne(kg): ${quantidade}`)
        console.log(`Preço total: R$ ${preço_total.toFixed(2)}`)
        console.log(`tipo de pagamento: Catão Tabajara`)
        console.log(`Valor de desconto: R$ ${(desconto(preço_total, 5)).toFixed(2)}`)
        console.log(`valor a pagar: R$ ${preço_com_desconto.toFixed(2)}`)
        
    }else if (forma_pagamento === 'd'){

        console.log(' ##### Hipermercado Tabajara #####')
        console.log('   Cumpo Fiscal')
        console.log(`Tipo de carne: ${tipo}`)
        console.log(`Quantidade de carne(kg): ${quantidade}`)
        console.log(`Preço total: R$ ${preço_total.toFixed(2)}`)
        console.log(`tipo de pagamento: Dinheiro`)
        console.log(`Valor de desconto: R$ ${(desconto(preço_total, 0)).toFixed(2)}`)
        console.log(`valor a pagar: R$ ${preço_total.toFixed(2)}`)
        
    }else{
        console.log('Opção de pagamento inválida')
    }

}

function desconto(preco, percen){
    return preco * percen / 100
}

function preco_carne(tipo, kg){
    if(kg <= 5 && tipo === 'file'){
        return kg * 4.9
    }else if(kg > 5 && tipo === 'file'){
        return kg * 5.8
    }

    if(kg <= 5 && tipo === 'alcatra'){
        return kg * 5.9
    }else if(kg > 5 && tipo === 'alcatra'){
        return kg * 6.8
    }

    if(kg <= 5 && tipo === 'picanha'){
        return kg * 6.9
    }else if(kg > 5 && tipo === 'picanha'){
        return kg * 7.8
    }
}


main()