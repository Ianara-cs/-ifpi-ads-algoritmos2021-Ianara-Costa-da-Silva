const input = require('prompt-sync')()

function main(){

    const nota1 = Number(input(' Primeira nota: '))
    const nota2 = Number(input(' Segunda nota: '))

    const media = (nota1 + nota2) / 2

    if(media >= 0 && media <= 4 ){
        console.log(`Notas: ${nota1} e ${nota2}`)
        console.log(`Média: ${media}`)
        console.log('Conceito: E ')
        console.log('REPROVADO')
        
    }else if(media > 4 && media < 6){
        console.log(`Notas: ${nota1} e ${nota2}`)
        console.log(`Média: ${media}`)
        console.log('Conceito: D ')
        console.log('REPROVADO')

    }else if(media >= 6 && media < 7.5){
        console.log(`Notas: ${nota1} e ${nota2}`)
        console.log(`Média: ${media}`)
        console.log('Conceito: C ')
        console.log('APROVADO')

    }else if(media >= 7.5 && media < 9){
        console.log(`Notas: ${nota1} e ${nota2}`)
        console.log(`Média: ${media}`)
        console.log('Conceito: B ')
        console.log('APROVADO')

    }else if( media >= 9 && media <= 10){
        console.log(`Notas: ${nota1} e ${nota2}`)
        console.log(`Média: ${media}`)
        console.log('Conceito: A ')
        console.log('APROVADO')
    }

}
main()