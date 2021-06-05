const input = require('prompt-sync')()

function main(){
    console.log(' ## Data recente ##')

    console.log('Primeira data')
    const dia1 = Number(input('Dia: '))
    const mes1 = Number(input('Mês: '))
    const ano1 = Number(input('Ano: '))

    console.log('Segunda data')
    const dia2 = Number(input('Dia: '))
    const mes2 = Number(input('Mês: '))
    const ano2 = Number(input('Ano: '))

    const primeira_data = dia1 <= 31 && mes1 <=12
    const segunda_data = dia2 <= 31 && mes2 <= 12
    const valido = primeira_data && segunda_data


    if(valido && dia1 > dia2 && mes1 === mes2 && ano1 === ano2){
        console.log(`${dia1}/${mes1}/${ano1} é a data mais recente`)
        
    }else if(valido && mes1 > mes2 && ano1 === ano2){
        console.log(`${dia1}/${mes1}/${ano1} é a data mais recente`)

    }else if(valido && ano1 > ano2){
        console.log(`${dia1}/${mes1}/${ano1} é a data mais recente`)

    }else if(valido && dia2 > dia1 && mes1 === mes2 && ano1 === ano2){
        console.log(`${dia2}/${mes2}/${ano2} é a data mais recente`)
        
    }else if(valido && mes2 > mes1 && ano1 === ano2){
        console.log(`${dia2}/${mes2}/${ano2} é a data mais recente`)

    }else if(valido && ano2 > ano1){
        console.log(`${dia2}/${mes2}/${ano2} é a data mais recente`)
    }


}
main()