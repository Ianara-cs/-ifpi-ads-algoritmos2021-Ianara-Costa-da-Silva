const input = require('prompt-sync')()

function main(){

    console.log('O empréstimo é R$ 3000.00 será pago todos os dias R$ 200.00 ')
    let emprestimo = 3000
    let quantidade_dias = 0
    const pagamento = 200
    

    while(emprestimo !== 0){

        quantidade_dias++
        emprestimo = emprestimo - pagamento    // dúvida

    }

    console.log(`Então será necessário ${quantidade_dias} dias para concluir o pagamento do impréstimo`)

}

main()