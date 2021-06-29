const input = require('prompt-sync')()

function main(){
    const num_teste = Number(input('Quantidade de teste que vem a seguir: '))

    for(let i = 1; i <= num_teste; i++ ){
        let nota1 = Number(input('Primeira nota: '))
        let nota2 = Number(input('Segunda nota: '))
        let nota3 = Number(input('Terceira nota: '))

        const media = calcular_media(nota1, nota2, nota3)

        console.log('Média:', media.toFixed(1))
    }

}


function calcular_media(nota1, nota2, nota3){
    return media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10
}

main()