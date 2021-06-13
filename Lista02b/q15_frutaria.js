const input = require('prompt-sync')()

function main(){
    const morango = Number(input('Quantidade de kg de morango: '))
    const maça = Number(input('Quantidade de kg de maçã: '))

    const kg_das_frutas = morango + maça
    const valor_frutas = (valor_morango(morango)) + (valor_maca(maça))

    if(kg_das_frutas > 8 || valor_frutas > 25){
        const preço_com_desconto = valor_frutas - (desconto(valor_frutas, 10))
        console.log(`O valora ser pago: R$ ${preço_com_desconto.toFixed(2)}`)
    }else{
        console.log(`O valor a ser pago: R$ ${valor_frutas.toFixed(2)}`)
    }

}

function desconto(preco, percen){
    return preco * percen / 100
}

function valor_morango(kg){
    if(kg <= 5){
        return kg * 2.5
    }else if(kg > 5){
        return kg * 2.2
    }
}

function valor_maca(kg){
    if(kg <= 5){
        return kg * 1.8
    }else if(kg > 5){
        return kg * 1.5

    }
}

main()