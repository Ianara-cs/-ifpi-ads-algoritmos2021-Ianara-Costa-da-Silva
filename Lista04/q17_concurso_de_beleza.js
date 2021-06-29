const input = require('prompt-sync')()

function main(){
    console.log('Para encerrar o programa coloque em nome = FIM')
    console.log(' ### Concurso de Beleza ###')
    console.log('Dados das candidatas')


    let nome = input('Nome: ')
    let peso = Number(input('Peso(kg): ')) 
    let altura = Number(input('Altura(m): '))

    let nome_alta = nome
    let nome_baixa = nome

    let mais_alta = altura
    let mais_baixa = altura

    let nome_magra = nome
    let nome_gorda = nome

    let mais_magra = peso
    let mais_gorda = peso

    while(nome !== 'FIM'){


        if(peso > mais_gorda){
            mais_gorda = peso 
            nome_gorda = nome

        }else if(peso < mais_magra){
            mais_magra = peso
            nome_magra = nome

        }
        if(altura > mais_alta){
            mais_alta = altura
            nome_alta = nome

        }else if(altura < mais_baixa){
            mais_baixa = altura
            nome_baixa = nome
        }

        nome = input('Nome: ')
        
        if(nome !== 'FIM'){
            peso = Number(input('Peso(kg): '))
            altura = Number(input('Altura(m): '))
        }else{}

    }

    console.log(`A candidata mais alta é ${nome_alta}, altura(m): ${mais_alta}`)
    console.log(`A candidata mais baixa é ${nome_baixa}, altura(m): ${mais_baixa}`)
    console.log(`A candidata mais magra é ${nome_magra}, peso(kg): ${mais_magra}`)
    console.log(`A canditada mais gorda é ${nome_gorda}, peso(kg): ${mais_gorda}`)
}

main()