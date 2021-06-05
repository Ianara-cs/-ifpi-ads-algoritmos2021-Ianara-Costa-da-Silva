const input = require('prompt-sync')()

function main(){
    console.log('## Números primos ##')

    const numero = Number(input('Coloque um número entre 0 a 100: '))

  const resultado = eh_primo(numero)
  console.log(resultado)

}

function eh_primo(valor){


   if(valor%2 ===0 || valor%3 ===0 || valor%5 ===0){
    return 'Não é primo'
   }else if(valor === 2 || valor ===3 || valor === 5){
    return 'É primo'
   }else if(valor/valor===1 && valor/1 === valor){
    return 'É primo'
   }
}

main()



