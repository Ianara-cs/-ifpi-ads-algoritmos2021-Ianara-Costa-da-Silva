const input = require('prompt-sync')()

function main(){
    console.log('Para encerrar o programa coloque em nome do produto - FIM')
    let nome = input('Nome do produto: ')
    let preço = Number(input('Preço do produto: '))
    let quantidade = Number(input('Quantidade comprada: '))

    let valor_total = 0

    while(nome !== 'FIM'){

        let valor = preço * quantidade
        if(quantidade <= 10){
            valor_total = valor_total
            nome = nome
            quantidade = quantidade
        }else if(quantidade >= 11 && quantidade <= 20){
            valor_total = valor - desconto(valor, 10)
            nome = nome
            quantidade = quantidade
        }else if(quantidade >= 21 && quantidade <= 50){
            valor_total = valor - desconto(valor, 20)
            nome = nome
            quantidade = quantidade
        }else if(quantidade > 50){
            valor_total = valor - desconto(valor, 25)
            nome = nome
            quantidade = quantidade
        }

        console.log(`Nome do produto: ${nome} `)
        console.log(`Valor a ser pago(R$): ${valor_total}`)

        nome = input('Nome do produto: ')
        if(nome !== 'FIM'){
            preço = Number(input('Preço do produto: ')) 
            quantidade = Number(input('Quantidade comprada: '))  
        }
    }

}

function desconto(valor, porcentagem){
    return valor * (porcentagem / 100)
}

main()