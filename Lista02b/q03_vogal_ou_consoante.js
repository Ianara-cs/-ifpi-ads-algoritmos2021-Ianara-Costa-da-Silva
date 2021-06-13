const input = require ('prompt-sync')()

function main(){

    const letra = input('Coloque uma letra: ')

    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        console.log(`A letra '${letra}' é uma vogal`)
    }else{
        console.log(`A letra '${letra}' é uma consoante`)
    }

}
main()