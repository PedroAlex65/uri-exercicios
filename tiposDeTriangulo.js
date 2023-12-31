
let input = require("fs").readFileSync("stdin", "utf8");

let lines = input.trim().split('\n').map((line) => parseFloat(line).toFixed(1));

console.log(lines);

lines.sort((a,b)=> b-a)

const a = lines[0]
const b = lines[1]
const c = lines[2]



if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else {
  if (a * a === (b * b + c * c)) {
    console.log("TRIANGULO RETANGULO");
  }
  if (a * a > (b * b + c * c)) {
    console.log("TRIANGULO OBTUSANGULO");
  }
  if (a * a < (b * b + c * c)) {
    console.log("TRIANGULO ACUTANGULO");
  }
  if (a === b && b === c) console.log("TRIANGULO EQUILATERO");
  else if (a === b || b === c || a === c) {
    console.log("TRIANGULO ISOSCELES");
  }
}