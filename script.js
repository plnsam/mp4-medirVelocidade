medirVelocidade(80);

function medirVelocidade(velocidade) {
  if (velocidade <= 70) console.log("ta ok");
  else {
    let pontos = Math.floor((velocidade - 70) / 5);
    if (pontos >= 12) console.log("Carteira suspensa");
    else console.log("Pontos: ", pontos);
  }
}
