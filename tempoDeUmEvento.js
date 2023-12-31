let input = require("fs").readFileSync("stdin", "utf8");

let lines = input.split("\n");

let diaInicial = lines[0].match(/\d+/)[0];
let diaFim = lines[2].match(/\d+/)[0];

let diaInicioNumber = Number(diaInicial);

let horarioInicial = lines[1].split(":");
let horaInicio = +horarioInicial[0];
let minutoInicio = +horarioInicial[1];
let segundosInicio = +horarioInicial[2];

let diaFimNumber = Number(diaFim);

let horarioFinal = lines[3].split(':');
let horaFim = Number(horarioFinal[0]);
let minutoFim = Number(horarioFinal[1]);
let segundosFim = Number(horarioFinal[2]);

let horasEmUmDia = 24;

let diaQueTerminou = diaFimNumber - diaInicioNumber;

if (horaFim < horaInicio || (horaFim === horaInicio && minutoFim < minutoInicio)) {
  diaQueTerminou -= 1;
  horaFim += horasEmUmDia;
}

let duracaohoras = horaFim - horaInicio;
let duracaoMinutos = minutoFim - minutoInicio;
let duracaoSegundos = segundosFim - segundosInicio;

console.log(`${diaQueTerminou} dia(s)`);
console.log(`${duracaohoras} hora(s)`);
console.log(`${duracaoMinutos} minuto(s)`);
console.log(`${duracaoSegundos} segundo(s)`);


