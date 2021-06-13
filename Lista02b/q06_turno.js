const input = require('prompt-sync')()

function main(){

    const turno = input('Coloque a letra que representa seu turno: ')

    if(turno === 'M'){
        console.log('Bom Dia!')
    }else if(turno === 'V'){
        console.log('Boa Tarde!')
    }else if(turno === 'N'){
        console.log('Boa Noite!')   
    }else{
        console.log('Valor Inválido!')
    }

}
main()