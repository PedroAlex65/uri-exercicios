var input = require("fs").readFileSync("stdin", "utf8");
var [inicio, fim] = input.split(" ").map((number) => parseInt(number));

let inicioEmMinutos = inicio * 60;
let fimEmMinutos = fim * 60;

let diferenca = fimEmMinutos - inicioEmMinutos;

if (diferenca < 0) {
  let soma = diferenca + 1440;
  let convercaoEmHoras = soma / 60;
  console.log(`O JOGO DUROU ${convercaoEmHoras} HORA(S)`);
} else if (diferenca > 0) {
  let convercaoEmHora = diferenca / 60;
  console.log(`O JOGO DUROU ${convercaoEmHora} HORA(S)`);
}else{
    console.log(`O JOGO DUROU 24 HORA(S)`);
}
