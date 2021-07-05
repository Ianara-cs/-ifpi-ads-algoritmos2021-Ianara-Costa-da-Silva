const input = require('prompt-sync')()

function main(){
    const data = input('Data: ')

    let dia  = ''
    let mes_tipo_string = ''
    let ano = ''

    let caractere = ''
    for(let i = 0; i < data.length; i++){
        caractere = data[i]
        if(caractere.charCodeAt(0) === 47){
            continue
        }else if(dia.length !== 2){
            dia = dia + caractere
        }else if(mes_tipo_string.length !== 2){
            mes_tipo_string = mes_tipo_string + caractere
        }else{
            ano = ano + caractere
        }
    }

    let mes_tipo_number = Number(mes_tipo_string)
    let mes_f = mes_fomatado(mes_tipo_number)
    console.log(`${dia} de ${mes_f} de ${ano}`)
    
}

function mes_fomatado(mes){

    let mes_por_exten = ''

    if(mes === 01){
        mes_por_exten = 'janeiro'
    }else if(mes === 02){
        mes_por_exten = 'fevereiro'
    }else if(mes === 03){
        mes_por_exten = 'março'
    }else if(mes === 04){
        mes_por_exten = 'abril'
    }else if(mes === 05){
        mes_por_exten = 'maio'
    }else if(mes === 06){
        mes_por_exten = 'junho'
    }else if(mes === 07){
        mes_por_exten = 'julho'
    }else if(mes === 08){
        mes_por_exten = 'agosto'
    }else if(mes === 09){
        mes_por_exten = 'setembro'
    }else if(mes === 10){
        mes_por_exten = 'outubro'
    }else if(mes === 11){
        mes_por_exten = 'novembro'
    }else if(mes === 12){
        mes_por_exten = 'dezembro'
    }

    return mes_por_exten
}



main()