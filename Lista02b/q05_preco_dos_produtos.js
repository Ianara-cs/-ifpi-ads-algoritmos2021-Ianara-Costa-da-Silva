const input = require('prompt-sync')()

function main(){

    const preço1 = Number(input('Preço do produto 1 (R$): '))
    const preço2 = Number(input('Preço do produto 2 (R$): '))
    const preço3 = Number(input('Preço do produto 3 (R$): '))


    if(preço2 < preço1 && preço2 < preço3){
        console.log('O Produto 2 deve ser comprado')
    }else if(preço3 < preço2 && preço3 < preço1){ 
        console.log('O Produto 3 deve ser comprado') 
    }else if(preço1 < preço2 && preço1 < preço3){
        console.log('O Produto 1 deve ser comprado')
    }else{
        console.log('Escolha qualquer um')
    }
    
}
main()