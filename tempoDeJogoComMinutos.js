let input = require("fs").readFileSync("stdin", "utf8");

let lines = input.split(" ");

let inicio = Number(lines[0]);
let minutoInicial = Number(lines[1]);

let fim = Number(lines[2]);
let minutoFinal = Number(lines[3]);

let horasDia = 24;
let minutosHoras = 60;

let totalMinutosInicio = inicio * minutosHoras + minutoInicial;
let totalMinutosFim = fim * minutosHoras + minutoFinal;

if (totalMinutosInicio === totalMinutosFim) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else if (totalMinutosInicio > totalMinutosFim) {
  let diferencaMinutos = 24 * 60 - totalMinutosInicio + totalMinutosFim;
  let horas = Math.floor(diferencaMinutos / minutosHoras);
  let minutos = diferencaMinutos % minutosHoras;
  console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
} else {
  let diferencaMinutos = totalMinutosFim - totalMinutosInicio;
  let horas = Math.floor(diferencaMinutos / minutosHoras);
  let minutos = diferencaMinutos % minutosHoras;
  console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
}
