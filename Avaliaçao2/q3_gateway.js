const input = require('prompt-sync')()

function main(){

    const valor_da_compra = Number(input('Valor da compra(R$): '))
    console.log('d-dinheiro e cc-cartão de crédito')
    const forma_de_pagamento = input('Forma de pagamento(d ou cc): ')
    let taxa = 0
    let quantidade_de_parcela = 0
    let dias = 1
    
    if(forma_de_pagamento === 'cc' ){
        dias = Number(input('Quantidade de dias para receber o dinheiro(2, 14 ou 31): '))
        quantidade_de_parcela = Number(input('Quantidade de parcela(Até 12x): '))

        taxa = saber_taxa(valor_da_compra, quantidade_de_parcela, dias)
    }

    const valor_liquido = valor_da_compra - taxa

    console.log('   -------------------------')
    console.log('Valor da compra = R$', valor_da_compra.toFixed(2))
    if(forma_de_pagamento === 'd'){
        console.log('Forma de pagamento: Dinheiro')
    }else{
        console.log('Forma de pagamento: Catão de Crédito', 'Quantidade_de_parcela', quantidade_de_parcela )
        console.log('Valor Taxa cobrado pelo Gateway - R$', taxa.toFixed(2))
    }
    console.log('Valor líquido = R$', valor_liquido.toFixed(2) )
    console.log('Receber em quantos dias:', dias )
}

function porcentagem(valor, per){
    return valor * per/100
}

function saber_taxa(valor_da_compra, quantidade_de_parcela, dias){
    let taxa = 0
    if(dias === 2){
        if(quantidade_de_parcela > 1){
            let porcentagem_por_parcela = 1 * quantidade_de_parcela 
            taxa = porcentagem(valor_da_compra, 4.99) + 0.4 + porcentagem(valor_da_compra, porcentagem_por_parcela)
        }else{
            taxa = porcentagem(valor_da_compra, 4.39) + 0.4 + porcentagem(valor_da_compra, porcentagem_por_parcela)
        }
    }else if(dias === 14){
        if(quantidade_de_parcela > 1){
            let porcentagem_por_parcela = 1 * quantidade_de_parcela 
            taxa = porcentagem(valor_da_compra, 3.99) + 0.4 + porcentagem(valor_da_compra, porcentagem_por_parcela)
        }else{
            taxa = porcentagem(valor_da_compra, 4.49) + 0.4 + porcentagem(valor_da_compra, porcentagem_por_parcela)
        }
    }else if(dias === 31){
        if(quantidade_de_parcela > 1){
            let porcentagem_por_parcela = 1 * quantidade_de_parcela 
            taxa = porcentagem(valor_da_compra, 3.39) + 0.4 + porcentagem(valor_da_compra, porcentagem_por_parcela)
        }else{
            taxa = porcentagem(valor_da_compra, 2.99) + 0.4 + porcentagem(valor_da_compra, porcentagem_por_parcela)
        }
    }
    return taxa

}

main()