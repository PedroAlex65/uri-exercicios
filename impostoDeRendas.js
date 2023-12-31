
const input = require("fs").readFileSync("stdin", "utf8");

const salario = Number(input.trim().split("\n")[0]);

let impostoUm = 0.08;
let impostoDois = 0.18;
let impostoTres = 0.28;

if (salario >= 0.00 && salario <= 2000.00) {
  console.log("Isento");
}
 else if (salario >= 2000.01 && salario < 3000.00) {
  calc = ((salario - 2000.01) * impostoUm).toFixed(2);
  console.log(`R$ ${calc}`);
}
 else if (salario >= 3000.01 && salario <= 4500.00) {
  calc = ((salario - 3000.01) * impostoDois + 1000.00 * impostoUm).toFixed(2);
  console.log(`R$ ${calc}`);
} 
else {
  calc = ((salario - 4500.00) * impostoTres + 1500.00 * impostoDois + 1000.00 * impostoUm).toFixed(2);
  console.log(`R$ ${calc}`);
}
