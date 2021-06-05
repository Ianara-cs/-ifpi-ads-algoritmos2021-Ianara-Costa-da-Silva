const input = require('prompt-sync')()

function main(){
    console.log(' ## Identificar o Quadrante ##')

    const ang = Number(input('Coloque um ângulo(0 a 360°)'))

    if(ang >=0 && ang <=90){
        console.log('Estar no Primeiro Quadrante')
    }else if(ang > 90 && ang <= 180){
        console.log('Estar no Segundo Quadrante')
    }else if(ang > 180 && ang <= 270){
        console.log('Estar no Terceiro Quadrante')
    }else if(ang > 270 && ang <= 360){
        console.log('Estar no Quarto Quadrante')
    }
}
main()