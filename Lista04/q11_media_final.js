const input = require('prompt-sync')()

function main(){

    let matricula = Number(input('Número da matrícula: '))
    let quantidade = 0
    let aprovado = 0 
    let reprovado = 0
    

    while(matricula != 0 ){

        let nota1 = Number(input('Nota 1: '))
        let nota2 = Number(input('Nota 2: '))
        let nota3 = Number(input('Nota 3: '))

        let media_final = (nota1*2 + nota2*3 +nota3*5) / 10

        if(media_final >= 7){
            aprovado++
            console.log('Aluno Aprovado')
        }else if(media_final < 7){
            reprovado++
            console.log('Aluno Reprovado')
        }

        quantidade++
        matricula = Number(input('Número da matrícula: '))
    }

    console.log('Total de alunos na turma:', quantidade)
    console.log('Total de alunos Aprovados:', aprovado)
    console.log('Total de alunos Reprovados:', reprovado)



}

main()