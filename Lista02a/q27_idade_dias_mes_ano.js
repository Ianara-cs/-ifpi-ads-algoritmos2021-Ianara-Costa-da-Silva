const input = require('prompt-sync')()

function main(){

    console.log('Data de nascimento(em númeral)') 
    const dia_que_nasceu = Number(input('Dia de Nascimento: '))
    const mes_de_nascimento = Number(input('Mês de Nascimento: '))
    const ano_de_nascimento = Number(input('Ano que Nasceu: '))

    console.log('Data de hoje(em númeral)')
    const dia_de_hoje = Number(input('Dia: '))
    const mes_atual = Number(input('Mês: '))
    const ano_atual = Number(input('Ano: '))

    const dia_valido = idade_dia(dia_que_nasceu, dia_de_hoje)
    const mes_valido = idade_mes(mes_de_nascimento, mes_atual)
    const ano_valido = idade_ano(ano_de_nascimento, mes_de_nascimento, ano_atual, mes_atual)

   
    const dia = dia_de_hoje && dia_que_nasceu
    const mes = mes_atual && mes_de_nascimento
    const ano = ano_atual - ano_de_nascimento

    if(dia <= 31 && mes <= 12){
        console.log(`A idade é ${ano_valido} anos, ${mes_valido} mês(s) e ${dia_valido} dia(s)`)



    }else{
        console.log('Data inválida')
    }

}

function idade_dia(dia_nascimento, dia_atual){
    if(dia_nascimento >= dia_atual){
        return   (30 - (dia_nascimento - dia_atual))

    }else if(dia_atual > dia_nascimento){
        return (dia_atual - dia_nascimento)
    }
}

function idade_mes(mes_de_nascimento, mes_atual){
    if(mes_atual >= mes_de_nascimento){
        return  (mes_atual - mes_de_nascimento)
    }else if(mes_de_nascimento > mes_atual){
        return (12 - (mes_de_nascimento - mes_atual))
    }
}

function idade_ano(ano_de_nascimento, mes_de_nascimento, ano_atual, mes_atual){
    if(ano_atual >= ano_de_nascimento && mes_atual < mes_de_nascimento){
        return (ano_atual - ano_de_nascimento) - 1
    }else if(ano_atual >= ano_de_nascimento && mes_atual > mes_de_nascimento)
        return ano_atual - ano_de_nascimento

}
   
main()