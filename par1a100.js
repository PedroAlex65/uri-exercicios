let zero = 1;
for (let i = 0; i <= 200; i++) {
  let calc = (zero + i) / 2;

  if (calc % 2 === 0) {
    console.log(calc);
  }
}
