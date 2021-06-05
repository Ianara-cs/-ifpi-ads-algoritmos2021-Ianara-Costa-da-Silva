const input = require('prompt-sync')()

function main(){

    const nota1 = Number(input('Nota 1: '))
    const nota2 = Number(input('Nota 2: '))

    const media = (nota1 + nota2) / 2

    if(media >= 7){
        console.log('Aprovado')

    }else if(media < 7){ 

        const exame = Number(input('Nota do exame: '))
        const media_final =(nota1 + nota2 + exame)/3

        if(media_final >=5){
            console.log('Aprovado')
        }else if(media_final < 5){
            console.log('Reprovado')
        }
    }

}
main()