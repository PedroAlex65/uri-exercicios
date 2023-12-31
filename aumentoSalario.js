let input = require("fs").readFileSync("stdin", "utf8");

let lines = Number(input.replace());

if (lines <= 400.0) {
  let newRemuneration = lines + (lines * 15) / 100;
  let readjustment = (lines * 15) / 100;

  console.log(`Novo salario: ${newRemuneration.toFixed(2)}
Reajuste ganho: ${readjustment.toFixed(2)}
Em percentual: 15 %`);
} else if (lines >= 400.01 && lines <= 800) {
  let newRemuneration = lines + (lines * 12) / 100;
  let readjustment = (lines * 12) / 100;

  console.log(`Novo salario: ${newRemuneration.toFixed(2)}
Reajuste ganho: ${readjustment.toFixed(2)}
Em percentual: 12 %`);
} else if (lines >= 800.01 && lines <= 1200.0) {
  let newRemuneration = lines + (lines * 10) / 100;
  let readjustment = (lines * 10) / 100;

  console.log(`Novo salario: ${newRemuneration.toFixed(2)}
Reajuste ganho: ${readjustment.toFixed(2)}
Em percentual: 10 %`);
} else if (lines >= 1200.01 && lines <= 2000.0) {
  let newRemuneration = lines + (lines * 7) / 100;
  let readjustment = (lines * 7) / 100;

  console.log(`Novo salario: ${newRemuneration.toFixed(2)}
Reajuste ganho: ${readjustment.toFixed(2)}
Em percentual: 7 %`);
}else{
    let newRemuneration = lines + (lines * 4) / 100;
    let readjustment = (lines * 4) / 100;
  
    console.log(`Novo salario: ${newRemuneration.toFixed(2)}
Reajuste ganho: ${readjustment.toFixed(2)}
Em percentual: 4 %`);
}
