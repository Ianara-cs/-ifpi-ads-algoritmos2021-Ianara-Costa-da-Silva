const input = require('prompt-sync')()

function main(){
    console.log(' ## Data válida ## ')

    const dia = Number(input('Dia: '))
    const mes = Number(input('Mês: '))
    const ano = Number(input('Ano: '))

    const dia30 = (dia <= 30 && dia >=1)
    const dia31 = (dia <= 31 && dia >=1)

    if(dia30 && (mes ===4 || mes ===6 || mes ===9 || mes ===11)){
        console.log('Essa data é válida')
    }else if(dia31 && (mes <=3 && mes >=1 || mes ===5 || mes ===7 || mes ===8 || mes ===10 || mes ===12 )){
        console.log('Essa data é válida')

    }else{
        console.log('Essa data não é válida')
    }
}

main()