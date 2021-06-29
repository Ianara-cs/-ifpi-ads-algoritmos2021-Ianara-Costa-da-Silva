const input = require('prompt-sync')()

function main(){
    const verbo = input('Coloque um verbo (terminação em ER): ')

    conjugacao(verbo)
}

function conjugacao(verbo){
    let radical = ''

    if(verbo[verbo.length - 2] === 'e' && verbo[verbo.length -1] === 'r'){
        for(let i = 0; i < verbo.length - 2; i++){
            radical += verbo[i]
        }
        terminacoes(radical)
    }else{
        console.log('Não é um verbo terminado em ER')
    }
}

function terminacoes(radical){
    console.log('Eu',radical+'o')
    console.log('Tu',radical+'es')
    console.log('Ele',radical+'e')
    console.log('Nós',radical+'emos')
    console.log('Vós',radical+'eis')
    console.log('Eles',radical+'em')
}

main()