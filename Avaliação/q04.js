const input = require('prompt-sync')()

function main(){
    console.log('Cálculo de energia elétrica')

    const leitura_atual = Number(input('Leitura atual(KWh): '))
    const leitura_anterior = Number(input('Leitura anterior(KWh): '))

    const consumo = leitura_atual - leitura_anterior

    console.log('     Talão de Energia  ')

    if(consumo > 30 && consumo <= 100){
        const valor = consumo * 0.59
        const valor1 = valor + luz_publica(consumo) + bandeira(consumo)

        const icms = valor1 * 0.25
        const pis_confis = valor1 * 0.15
        const impostos = icms + pis_confis

        

        const valor_com_impostos = valor1 + impostos

       console.log(` Consumo ${consumo} KWh`)
       console.log(` Energia R$ ${valor.toFixed(2)}`)
       console.log(` Bandeira R$ ${bandeira(consumo).toFixed(2)} `)
       console.log(` ICMS R$ ${icms.toFixed(2)}`)
       console.log(` PIS/CONFIS R$ ${pis_confis.toFixed(2)}`)
       console.log(` Taxa de iluminação R$ ${luz_publica(consumo).toFixed(2)}`)
       console.log(` Valor total do Talão de energia R$ ${valor_com_impostos.toFixed(2)}`)
      
        
    }else if(consumo > 100){
        const valor = consumo * 0.75
        const valor1 = valor + luz_publica(consumo) + bandeira(consumo)

        const icms = valor1 * 0.25
        const pis_confis = valor1 * 0.15
        const impostos = icms + pis_confis

        const valor_com_impostos = valor1 + impostos

        console.log(` Consumo ${consumo} KWh`)
        console.log(` Energia R$ ${valor.toFixed(2)}`)
        console.log(` Bandeira R$ ${bandeira(consumo).toFixed(2)} `)
        console.log(` ICMS R$ ${icms.toFixed(2)}`)
        console.log(` PIS/CONFIS R$ ${pis_confis.toFixed(2)}`)
        console.log(` Taxa de iluminação R$ ${luz_publica(consumo).toFixed(2)}`)
        console.log(` Valor total do Talão de energia R$ ${valor_com_impostos.toFixed(2)}`)

    }else if(consumo <= 30){
        console.log(` Consumo ${consumo} KWh`)
        console.log(` Energia R$ 0.00}`)
        console.log(` Bandeira R$ 0.00 `)
        console.log(` ICMS R$ 0.00`)
        console.log(` PIS/CONFIS R$ 0.00`)
        console.log(` Taxa de iluminação R$ 0.00`)
        console.log(` Valor total do Talão de energia R$ 0.00`)
    }

}

function luz_publica(consumo){
   if(consumo >= 80){
       return consumo * 0.06
   }else{
       return 0
   }
}

function bandeira(consumo){
    if(consumo % 100 === 0 && consumo >= 100 ){
        return (consumo / 100) * 8
    }else{
        return 0
    }
}

main()