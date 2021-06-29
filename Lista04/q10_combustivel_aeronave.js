const input = require ('prompt-sync')()

function main(){
    const quantidade_combustivel = Number(input('quantidade_combustivel(em litros): '))
    const quant_containers = Number(input('Quatidade de containers: '))

    const peso_do_combustivel = quantidade_combustivel * 1.5
    let quantidade = 1
    let peso_da_carga = 0

    // CARGA 
    while(quantidade <= quant_containers ){
        console.log('Agora coloque o peso de cada container')
        let peso_containers = Number(input('Peso do container(kg): '))

        peso_da_carga = peso_da_carga + peso_containers 

        quantidade++
    }
     
    // PASSAGEIROS
    let num_do_bilhete = Number(input('Número do Bilhete: '))
    let peso_pessoa = 0
    let volume_bagagem = 0
    let peso_dos_passageiros = 0
    let quantidade_de_pessoas = 0

    while(num_do_bilhete !== 0 ){
        
        let quant_bagagem =  Number(input('Quantidade de bagagem: '))

        peso_pessoa = peso_pessoa + 70
        volume_bagagem = volume_bagagem + (quant_bagagem * 10)

        peso_dos_passageiros = peso_dos_passageiros + peso_pessoa + volume_bagagem

        quantidade_de_pessoas++
        
        num_do_bilhete = Number(input('Número do Bilhete: '))

    }

    // DECOLAGEM
    const decolagem = peso_decolagem(peso_do_combustivel.toFixed(1), peso_dos_passageiros, peso_da_carga)

    console.log('Quantidade de passageiros:', quantidade_de_pessoas)
    console.log('Quantidade total de volume de pagagem(kg):', volume_bagagem)
    console.log('Peso dos passageiros(kg):', peso_dos_passageiros)
    console.log('Peso da carga(kg):', peso_da_carga)
    console.log('Quantidade possível de combustível(em litos):', quantidade_combustivel)
    if(decolagem === 500000){
        console.log('Decolagem liberada')
    }else{
        console.log('Decolagem não foi liberada')
    }
   
}

function peso_decolagem(peso1, peso2, peso3){
    soma = peso1 + peso2 + peso3
}


main()