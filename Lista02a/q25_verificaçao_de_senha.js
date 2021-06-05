const input = require('prompt-sync')()

function main(){
    console.log(' ## Validade de senha ##')

    const senha = Number(input('Coloque a senha: ')) 

    if(senha === 1234){
        console.log('Acesso permitido')
    }else{
        console.log('Acesso negado')
    }

}
main()