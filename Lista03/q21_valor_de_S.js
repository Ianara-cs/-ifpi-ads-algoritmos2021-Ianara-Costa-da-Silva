
function main(){
    let num = 1

    let s = 0
    let acrescimo = 0

    for(i = 1; i <= 50; i++){

        let dividendo = num + acrescimo

        s = s + (dividendo)/ i

        acrescimo++
        num++
    }

    console.log(`Resultado: S = ${s.toFixed(3)}`)

}

main()