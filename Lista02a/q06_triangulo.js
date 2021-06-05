const input = require('prompt-sync')()

function main(){
    console.log('## Verificação do tipo de Ângulo do Triângulo ##')
   
    const ang1 = Number(input('Ângulo 1: '))  
    const ang2 = Number(input('Ângulo 2: '))
    const ang3 = Number(input('Ângulo 3: '))

    if(eh_triangulo(ang1, ang2, ang3)){
        console.log('É um triângulo')

        const tipo = tipo_triangulo(ang1, ang2, ang3)
        console.log(tipo)
    }else{
        console.log('Não é um triângulo')
    }
}

function eh_triangulo(a1, a2, a3){
    const soma = a1 + a2 + a3
    return (soma === 180) && (a1 != 0 && a2 != 0 && a3 != 0 )
}

function tipo_triangulo(a1, a2, a3){
    if(a1 === 90 || a2 === 90 || a3 === 90){
        return 'É retângulo'
    }else if(a1 < 90 && a2 < 90 && a3 < 90){
        return 'É acutângulo'
    }else if(a1 > 90 || a2 > 90 || a3 > 90){
        return 'É obtusângulo'
    }
}   

main()