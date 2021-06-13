const input = require('prompt-sync')()

function main(){

    console.log('   Coloque (0) - para NÃO e (1) - para SIM')

    const telefone = Number(input('Telefonou para a vítima? '))
    const local = Number(input('Esteve no local do crime? '))
    const morada = Number(input('Mora perto da vítima? '))
    const dinheiro = Number(input('Devia para a vítima? '))
    const trabalho = Number(input('Já trabalhou com a vítima? '))

    if(telefone === 1 ){
        if(local === 1 && morada === 0 && dinheiro === 0 && trabalho === 0){
            console.log('Suspeita')
        }else if(morada === 1 && local === 0 && dinheiro === 0 && trabalho === 0){
            console.log('Suspeita')
        }else if(dinheiro  === 1 && local === 0 && morada === 0 && trabalho === 0){
            console.log('Suspeita')
        }else if(trabalho === 1 && dinheiro  === 0 && local === 0 && morada === 0){
            console.log('Suspeita')
        }else if(local === 1 && morada === 1 && dinheiro === 1 && trabalho === 1){
            console.log('Assassino')
        }else if(local === 1 || morada === 1 || dinheiro === 1 || trabalho === 1){
            console.log('Cúmplice')
        }else{
            console.log('Inocente')
        }

    }else if(local === 1){
        if(telefone === 1 && morada === 0 && dinheiro === 0 && trabalho === 0){
            console.log('Suspeita')
        }else if(morada === 1 && telefone === 0 && dinheiro === 0 && trabalho === 0){
            console.log('Suspeita')
        }else if(dinheiro  === 1 && telefone === 0 && morada === 0 && trabalho === 0){
            console.log('Suspeita')
        }else if(trabalho === 1 && dinheiro  === 0 && telefone === 0 && morada === 0){
            console.log('Suspeita')
        }else if(telefone === 1 && morada === 1 && dinheiro === 1 && trabalho === 1){
            console.log('Assassino')
        }else if(telefone === 1 || morada === 1 || dinheiro === 1 || trabalho === 1){
            console.log('Cúmplice')
        }else{
            console.log('Inocente')
        }
    }else if(morada === 1){
        if(local === 1 && telefone === 0 && dinheiro === 0 && trabalho === 0){
            console.log('Suspeita')
        }else if(telefone === 1 && local === 0 && dinheiro === 0 && trabalho === 0){
            console.log('Suspeita')
        }else if(dinheiro  === 1 && local === 0 && telefone === 0 && trabalho === 0){
            console.log('Suspeita')
        }else if(trabalho === 1 && dinheiro  === 0 && local === 0 && telefone === 0){
            console.log('Suspeita')
        }else if(local === 1 && telefone === 1 && dinheiro === 1 && trabalho === 1){
            console.log('Assassino')
        }else if(local === 1 || telefone === 1 || dinheiro === 1 || trabalho === 1){
            console.log('Cúmplice')
        }else{
            console.log('Inocente')
        }
    }else if(dinheiro === 1){
        if(local === 1 && morada === 0 && telefone === 0 && trabalho === 0){
            console.log('Suspeita')
        }else if(morada === 1 && local === 0 && telefone === 0 && trabalho === 0){
            console.log('Suspeita')
        }else if(telefone  === 1 && local === 0 && morada === 0 && trabalho === 0){
            console.log('Suspeita')
        }else if(trabalho === 1 && telefone  === 0 && local === 0 && morada === 0){
            console.log('Suspeita')
        }else if(local === 1 && morada === 1 && telefone === 1 && trabalho === 1){
            console.log('Assassino')
        }else if(local === 1 || morada === 1 || telefone === 1 || trabalho === 1){
            console.log('Cúmplice')
        }else{
            console.log('Inocente')
        }
    }else if(trabalho === 1){
        if(local === 1 && morada === 0 && dinheiro === 0 && telefone === 0){
            console.log('Suspeita')
        }else if(morada === 1 && local === 0 && dinheiro === 0 && telefone === 0){
            console.log('Suspeita')
        }else if(dinheiro  === 1 && local === 0 && morada === 0 && telefone === 0){
            console.log('Suspeita')
        }else if(telefone === 1 && dinheiro  === 0 && local === 0 && morada === 0){
            console.log('Suspeita')
        }else if(local === 1 && morada === 1 && dinheiro === 1 && telefone === 1){
            console.log('Assassino')
        }else if(local === 1 || morada === 1 || dinheiro === 1 || telefone === 1){
            console.log('Cúmplice')
        }else{
            console.log('Inocente')
        }
    }

}


main()