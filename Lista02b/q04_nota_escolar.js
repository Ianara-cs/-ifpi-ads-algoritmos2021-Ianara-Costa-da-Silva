const input = require('prompt-sync')()

function main(){
    console.log(' ### Nota escolar ###')

    const nota1 = Number(input('Primeira nota: '))
    const nota2 = Number(input('Segunda nota: '))

    const media = (nota1 + nota2) / 2

    if(media >= 7 && media < 10){
        console.log('Aprovado')
    }else if(media < 7){
        console.log('Reprovado')
    }else if(media === 10){
        console.log('Aprovado com Distinção')
    }

}
main()