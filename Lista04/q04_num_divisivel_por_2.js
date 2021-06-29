const input = require('prompt-sync')()

function main(){
    const num = Number(input('Número: '))

    let resultado = num / 2

    while(resultado > 1){
        resultado = resultado / 2
    }

    console.log('Útimo resultado:', resultado)

}


main()