const input = require('prompt-sync')()

function main(){
    console.log('Se a eleição fosse hoje em quem você votaria?')
    console.log('Serra = 45, Dilma = 13, Ciro Gomes = 23 ou indeciso = 99, outros = 98, nulo/branco = 0')
    console.log('Para encerra a votação = -1')

    let opiniao = Number(input('Voto: '))   

    let quantidade = 0
    let serra = 0
    let dilma = 0
    let ciro = 0
    let indeciso = 0
    let outros = 0
    let nulo = 0


    while(!(opiniao === -1)){

        if(opiniao === 45){
            serra++
        }else if(opiniao === 13){
            dilma++
        }else if(opiniao === 23){
            ciro++
        }else if(opiniao === 99){
            indeciso++
        }else if(opiniao === 98){
            outros++
        }else if(opiniao === 0){
            nulo++
        }
        
        quantidade++

        opiniao = Number(input('Voto: '))
    }

    const porcen_dilma = (dilma / quantidade) * 100
    const porcen_serra = (serra / quantidade) * 100
    const porcen_ciro = (ciro / quantidade) * 100
    const porcen_indeciso = (indeciso / quantidade) * 100
    const porcen_outros = (outros / quantidade) * 100
    const porcen_nulo = (nulo / quantidade) * 100

    console.log(' ### Resultado da pesquisa ###')
    console.log(`Dilma ${porcen_dilma.toFixed(2)}%`)
    console.log(`Serra ${porcen_serra.toFixed(2)}%`)
    console.log(`Ciro Gomes ${porcen_ciro.toFixed(2)}%`)
    console.log(`Indeciso ${porcen_indeciso.toFixed(2)}%`)
    console.log(`Outros ${porcen_outros.toFixed(2)}%`)
    console.log(`Nulo ${porcen_nulo.toFixed(2)}%`)
    console.log(`Quantidade de entrevistados: ${quantidade}`)
    
}



main()