const input = require('prompt-sync')()

function main(){
    let pts_jogador1 = 0
    let pts_jogador2 = 0

    while(pode_continuar(pts_jogador1, pts_jogador2)){
        let jogador = Number(input('Ponto: '))
        if(jogador === 1){
            pts_jogador1++
        }else{
            pts_jogador2++
        }

    }

    let vencedor = 'Vencedor: Jogador'
    if(pts_jogador1 > pts_jogador2){
        vencedor = vencedor + '01'
    }else{
        vencedor = vencedor + '02'
    }

    console.log(vencedor)

}

function pode_continuar(pts1, pts2){
    const alvo = 21
    const diff = Math.abs(pts2 - pts1)
    if(pts1 < alvo && pts2 < alvo){
        return true
    }else if( diff < 2){
        return true
    }else{
        return false
    }
}

main()