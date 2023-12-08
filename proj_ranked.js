///Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal



let vitorias = saldoVitorias(18, 5)



function saldoVitorias(vit, der){
    let saldo = vit - der
     return saldo

}

let level = nivelHeroi()

function nivelHeroi(){
 if (vitorias < 10){
    return "Ferro"
 }else if(vitorias >= 11 || resu <= 20){
    return "Bronze"
 }else if(vitorias >= 21 || resu <= 50){
    return "Prata"
 }else if(vitorias >= 51 || resu <= 80){
    return "Ouro"
 }else if(vitorias >= 80 || resu <= 90){
    return "Diamante"
 }else if(vitorias >= 91 || resu <= 100){
    return "Lendário"
 }else{
    return "Imortal"
 }
}

console.log("O Herói tem de saldo " + vitorias +  " VITORIAS, e está no nível " + level)