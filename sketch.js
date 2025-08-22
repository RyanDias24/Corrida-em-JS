function setup() {
  createCanvas(500, 400);
}

let xJogador = [460, 460, 460, 460];
let yJogador = [120, 170, 210, 260];
let jogador = ["🚗💨", "🚙💨", "🏎️💨", "🏍️💨"];
let teclas = ["a", "s", "d", "f"];
let quantidade = jogador.length;

function draw() {
  ativaJogo();
  Jogadores();
  Chegada();
  colisao();
}

function ativaJogo() {
  if (focused == true) {
    background("green");
  } else {
    background("rgb(75,75,75)");
  }
}

function Jogadores() {
  textSize(30);
  for (let i = 0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
}

function Chegada() {
  fill("white");
  rect(40, 0, 30, 400);
  fill("black");
  for (let yAtual = 0, yAtual2 = 10; yAtual < 400, yAtual2 < 400; yAtual += 20, yAtual2 += 20) {
    rect(40, yAtual, 10, 10);
    rect(50, yAtual2, 10, 10);
    rect(60, yAtual, 10, 10);
  }
}

function colisao() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] < 0) {
      text(jogador[i] + " venceu!", 150, 200);
      noLoop();
    }
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] -= random(20);
    }
  }
}

function keyPressed(){
  for (let i = 0; i < quantidade; i++)
    if (key == teclas[i]){
      xJogador[i] -= random(5);
  }
}