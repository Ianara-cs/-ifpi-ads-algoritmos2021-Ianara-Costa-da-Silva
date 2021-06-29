const input = require('prompt-sync')()

function main(){
    console.log(' ### Lista de número ###')
    console.log('Para encerrar o Programa coloque 0')

    let num = 1

    while(num !== 0 ){

        num = Number(input('Numero: '))

        if(num !== 0 ){
            console.log('Número:', num, 'Divisores: ')

            let div = 0

            while(div <= num){
                resto = num % div

                if(resto === 0){
                    console.log(div)
                }else {}


                div++
            }


        }else{
            console.log('Fim')
        }
        
    }

    


    

    

}

main()