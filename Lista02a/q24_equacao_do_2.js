const input = require('prompt-sync')()

function main(){
    console.log(' ## EQUAÇÃO DO SEGUNDO GRAU ##')

    const coef_a = Number(input('Coeficiente A: '))
    const coef_b = Number(input('Coeficiente B: '))
    const coef_c = Number(input('Coeficiente C: '))

   const coef_a_valido = coef_a != 0
   const delta = valor_de_delta(coef_a, coef_b, coef_c)

   if(coef_a_valido){
        if(delta > 0){ 
         const raiz_1 = raiz_1_calculo(coef_a, coef_b, coef_c)
         const raiz_2 = raiz_2_calculo(coef_a, coef_b, coef_c)
         console.log(`As raízes da equação são ${raiz_1.toFixed(2)} e ${raiz_2.toFixed(2)} `)
        }else if(delta === 0){
           console.log(`A raiz da equação é ${raiz_1.toFixed(2)}`)
        }else if(delta < 0 ){
           console.log('Não existe raiz')
        }

    }else{
       console.log('Não é uma equação do segundo grau')
    }
}

function valor_de_delta(coef_a, coef_b, coef_c){
    return coef_b **2 - 4 *coef_a * coef_c
}

function raiz_1_calculo(coef_a, coef_b, coef_c){
  return  (- (coef_b) + Math.sqrt(valor_de_delta(coef_a, coef_b, coef_c))) / 2 * coef_a
}

function raiz_2_calculo(coef_a, coef_b, coef_c){
    return  (- (coef_b) - Math.sqrt(valor_de_delta(coef_a, coef_b, coef_c))) / 2 * coef_a
  }
main()