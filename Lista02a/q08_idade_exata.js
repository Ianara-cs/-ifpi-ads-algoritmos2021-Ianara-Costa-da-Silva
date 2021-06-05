const input = require('prompt-sync')()

function main(){

    console.log('Data de hoje(em númeral)')
    const dia_de_hoje = Number(input('Dia: '))
    const mes = Number(input('Mês: '))
    const ano = Number(input('Ano: '))

    console.log('Data de nascimento(em númeral)') 
    const dia_que_nasceu = Number(input('Dia de Nascimento: '))
    const mes_de_nascimento = Number(input('Mês de Nascimento: '))
    const ano_de_nascimento = Number(input('Ano que Nasceu: '))

    const dia = dia_de_hoje && dia_que_nasceu
    const mes_0 = mes &&mes_de_nascimento
   
    if(dia <= 31 && mes_0 <= 12){ 
      const idade_exata = idade(ano, ano_de_nascimento, mes, mes_de_nascimento, dia_de_hoje, dia_que_nasceu)
      console.log(`Sua idade é ${idade_exata}`)
    }else{
        console.log('Data inválida')
    }

}

function idade(ano1, ano2, mes1, mes2, dia1, dia2){
    const ano = (ano1 - ano2) * 365  // Transformar idade em dias

    const mes = (mes1 - mes2)        // Saber quantos meses 
    const caso1_mes = Math.pow(mes, 2)  
    const caso2_mes = Math.sqrt(caso1_mes) * 30 // Transformar meses em dias em o valor positivo

    const dias = dia1 - dia2
    const caso1_dias = Math.pow(dias, 2)   
    const caso2_dias = Math.sqrt(caso1_dias)    // Caso o valor seja negativo colocar esse valor para positivo
    
    const soma = (ano + caso2_mes + caso2_dias)  
    const resultado = Math.trunc(soma / 365)
    return resultado  
}
main()