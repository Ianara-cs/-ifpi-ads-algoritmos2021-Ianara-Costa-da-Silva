const input = require('prompt-sync')()

function main(){

    console.log('  Situação do aluno no semestre')
    
    const nota1 = Number(input('Nota da primeira avaliação: '))
    const nota2 = Number(input('Nota da segunda avaliação: '))
    const nota3 = Number(input('Nota baseada nas atividades feitas: '))

    const media_s = media_semestral(nota1, nota2, nota3)

    if(media_s >= 7){
        console.log(`Sua média semestra é ${media_s.toFixed(2)} portanto você está Aprovado`)

    }else if(media_s < 7 && media_s >= 4){
        console.log(`Sua média semestral é ${media_s.toFixed(2)} portanto você irá fazer Prova final`)

        const pf = Number(input('Nota da Prova Final: '))
        const media_f = media_final(media_s, pf)

        if(media_f >= 6){
            console.log(`Sua média semestral Pós Prova Final é ${media_f.toFixed(2)} portanto você foi Aprovado`)
        }else if(media_f < 6){
            console.log(`Sua média semestral Pós Prova Final é ${media_f.toFixed(2)} portanto você foi Reprovado`)
        }


    }else if(media_s < 4){
        console.log(`Sua média semestral é ${media_s.toFixed(2)} portanto você foi Reprovado`)
    }

}

function media_semestral(nota1, nota2, nota3){
    return ((nota1 * 2 + nota2 * 3 + nota3 * 1) / 6) 
}

function media_final(media_s, pf){
    return ((media_s + pf) / 2)
}

main()