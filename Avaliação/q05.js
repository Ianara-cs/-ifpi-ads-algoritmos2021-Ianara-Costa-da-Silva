const input = require('prompt-sync')()

function main(){
    console.log(' A valiação do perfil do consumidor')
    console.log(' Coloque um valor (0 a 100) em cada categoria')

    const cat_a = Number(input('Valor da categoria a: '))
    const cat_b = Number(input('Valor da categoria b: '))
    const cat_c = Number(input('Valor da categoria c: '))

    // Score 1.0
    if(score_1(cat_a, cat_b, cat_c) >= 800 && score_1(cat_a, cat_b, cat_c) <= 1000){
        console.log(`Score 1.0: ${score_1(cat_a, cat_b, cat_c)} - Muito bom`)
    }else if(score_1(cat_a, cat_b, cat_c) >= 600 && score_1(cat_a, cat_b, cat_c) < 800){
        console.log(`Score 1.0: ${score_1(cat_a, cat_b, cat_c)} - Bom`)
    }else if(score_1(cat_a, cat_b, cat_c) >= 400 && score_1(cat_a, cat_b, cat_c) < 600){
        console.log(`Score 1.0: ${score_1(cat_a, cat_b, cat_c)} - Regular`)
    }else if(score_1(cat_a, cat_b, cat_c) >= 0 && score_1(cat_a, cat_b, cat_c) < 400){
        console.log(`Score 1.0: ${score_1(cat_a, cat_b, cat_c)} - Baixo`)
    }

    // Score 2.0
    if(score_2(cat_a, cat_b, cat_c) >= 701 && score_2(cat_a, cat_b, cat_c) <= 1000){
        console.log(`Score 2.0: ${score_2(cat_a, cat_b, cat_c)} - Muito bom`)
    }else if(score_2(cat_a, cat_b, cat_c) >= 501 && score_2(cat_a, cat_b, cat_c) <= 700){
        console.log(`Score 2.0: ${score_2(cat_a, cat_b, cat_c)} - Bom`)
    }else if(score_2(cat_a, cat_b, cat_c) >= 301 && score_2(cat_a, cat_b, cat_c) <= 500){
        console.log(`Score 2.0: ${score_2(cat_a, cat_b, cat_c)} - Regular`)
    }else if(score_2(cat_a, cat_b, cat_c) >= 0 && score_2(cat_a, cat_b, cat_c) <= 300){
        console.log(`Score 2.0: ${score_2(cat_a, cat_b, cat_c)} - Baixo`)
    }

}
function score_1(a, b, c){
    const valor_a = (26 / 100) * (a / 100) * 1000
    const valor_b = (57 / 100) * (b / 100) * 1000
    const valor_c = (17 / 100) * (c / 100) * 1000

    return valor_a + valor_b + valor_c
}

function score_2(a, b, c){
    const valor_a = (62 / 100) * (a / 100) * 1000
    const valor_b = (19 / 100) * (b / 100) * 1000
    const valor_c = (19 / 100) * (c / 100) * 1000

    return valor_a + valor_b + valor_c
}
main()