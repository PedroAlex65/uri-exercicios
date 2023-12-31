let input = require("fs").readFileSync("stdin", "utf8");
let lines = input.split("\n").map((num) => {
  return Number(num);
});

let countPositivos = 0;

for (let i = 0; i < lines.length; i++) {
  let positivos = lines[i];

  if (positivos > 0) {
    countPositivos++;
  }
}

console.log(`${countPositivos} valores positivos`);
