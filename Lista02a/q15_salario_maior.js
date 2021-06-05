const input = require('prompt-sync')()

function main(){
    console.log('Primeiro Professor')
    const horas1 = Number(input('Quantidade de horas aulas dadas de aulas: '))
    const valor1 = Number(input('Valor recebido por horas: '))

    console.log('Segundo Professor')
    const horas2 = Number(input('Quantidade de horas dadas de aulas: '))
    const valor2 = Number(input('Valor recebido por horas: '))

    const salario1 = horas1*valor1
    const salario2 = horas2*valor2

    let maior = salario1
    let menor = salario1

    if(salario2> maior){
        maior = salario2
        console.log('Quem recebe mais é o segundo professor')
    }else if(salario2< menor){
        menor = salario2
        console.log('Quem recebe mais é o primeiro professor')
    }

}
main()