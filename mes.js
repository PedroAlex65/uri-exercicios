let input = require("fs").readFileSync("stdin", "utf8");

let lines = input.trim().split('\n')

if (lines == 1) {
    console.log('January');
} else if (lines == 2) {
    console.log('February');
} else if (lines == 3) {
    console.log('March');
} else if (lines == 4) {
    console.log('April');
} else if (lines == 5) {
    console.log('May');
} else if (lines == 6) {
    console.log('June');
} else if (lines == 7) {
    console.log('July');
} else if (lines == 8) {
    console.log('August');
} else if (lines == 9) {
    console.log('September');
} else if (lines == 10) {
    console.log('October');
} else if (lines == 11) {
    console.log('November');
} else if (lines == 12) {
    console.log('December');
} else {
    console.log('Invalid month number');
}
