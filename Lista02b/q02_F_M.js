const input = require('prompt-sync')()

function main(){


    const letra = input('Coloque a letra que representa seu sexo: ')
   

    if(letra === "F"){
        console.log('Sexo Femenino')
    }else if(letra === "M"){
        console.log('Sexo Masculino')
    }else{
        console.log('Sexo inválido')
    }
}
main()