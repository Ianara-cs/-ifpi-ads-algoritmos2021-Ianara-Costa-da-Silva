const input = require('prompt-sync')()

function main(){

    const coordenada_x_1 = Number(input('Coordenada x: '))
    const coordenada_y_1 = Number(input('Coordenada y: '))

    const coordenada_x_2 = Number(input('Coordenada x: '))
    const coordenada_y_2 = Number(input('Coordenada y: '))

    const base = validacao_da_base(coordenada_x_1, coordenada_x_2)
    const altura = validacao_da_altura(coordenada_y_1, coordenada_y_2)
    const area = base*altura

    if(base !== altura && base >= 0 && altura >= 0){
        console.log('A área do retângulo é:', area)
    }else{
        console.log('Coloque os valores corretos')
    }

}

function validacao_da_base(x1, x2){
    if(x1 > x2){
        return x1 - x2
    }else if(x2 > x1){
        return x2 - x1
    }else if(x1 === x2){
        return x1
    }
}

function validacao_da_altura(y1, y2){
    if(y1 > y2){
        return y1 - y2
    }else if(y2 > y1){
        return y2 - y1
    }else if(y1 === y1){
        return y1
    }
}
main()