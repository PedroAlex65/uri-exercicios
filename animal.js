const input = require("fs").readFileSync("stdin", "utf8");

var lines = input.split("\n");

var a = lines.shift();
var b = lines.shift();
var c = lines.shift();

switch (true) {
  case a === "vertebrado" && b === "ave" && c === "carnivoro":
    console.log("aguia");
    break;
  case a === "vertebrado" && b === "ave" && c === "onivoro":
    console.log("pomba");
    break;
  case a === "vertebrado" && b === "mamifero" && c === "onivoro":
    console.log("homem");
    break;
  case a === "vertebrado" && b === "mamifero" && c === "herbivoro":
    console.log("vaca");
    break;
  case a === "invertebrado" && b === "inseto" && c === "hematofago":
    console.log("pulga");
    break;
  case a === "invertebrado" && b === "inseto" && c === "herbivoro":
    console.log("lagarta");
    break;
  case a === "invertebrado" && b === "anelideo" && c === "hematofago":
    console.log("sanguessuga");
    break;
  case a === "invertebrado" && b === "anelideo" && c === "onivoro":
    console.log("minhoca");
    break;
}
