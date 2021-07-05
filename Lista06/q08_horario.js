const input = require('prompt-sync')()

function main(){
    const horario = input('Horário: ')

    let hrs = ''
    let min = ''
    let segundo = ''

    let caractere = ''

    for(let i = 0; i < horario.length; i++){
        caractere = horario[i]
        if(caractere.charCodeAt(0) === 58){
            continue
        }else if(hrs.length !== 2){
            hrs = hrs + caractere
        }else if(min.length !== 2){
            min = min + caractere
        }else{
            segundo = segundo + caractere
        }
    }

    console.log(`${hrs} hora(s), ${min} minuto(s) e ${segundo} segundo(s)`)
}

main()