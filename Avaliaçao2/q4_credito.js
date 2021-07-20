const input = require('prompt-sync')()

function main(){

    const valor_do_emprestimo = Number(input('Valor do empréstimo(R$):'))
    const valor_da_pacela = Number(input('Valor da parcela(R$):'))
    let saldo = valor_do_emprestimo
    let mes = 0
    
    
    while(saldo >= 0){
        mes++
        let juros = saber_porcentagem(saldo, 1)
        let saldo_anterior = saldo
        saldo = saldo + juros - valor_da_pacela

        console.log('#### EXTRATO ####')
        console.log(`Mês: ${mes}`)
        console.log(`Pacerla fixa: R$ ${valor_da_pacela.toFixed(2)}`)
        console.log(`Juros: R$ ${juros.toFixed(2)}`)
        console.log(`Saldo Anterior: R$${saldo_anterior.toFixed(2)}`)
        console.log(`Saldo Atual: R$${saldo.toFixed(2)}`)
        console.log('---------------------------')

    }

    console.log(`Será necessário ${mes} meses para quitar o saldo devedor`)
}

function saber_porcentagem(valor, porcentagem){
    return valor * porcentagem / 100
}

main()
