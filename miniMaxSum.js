function miniMaxSum(arr) {
  let valorMaximo = arr[0];
  let valorMinimo = arr[0];
  let sum = 0;

  for (let i = 0; i < 5; i++) {
    
    if (valorMaximo < arr[i]) {
      valorMaximo = arr[i];
    }

    if(valorMinimo > arr[i]){
         valorMinimo = arr[i];
    }

    sum += arr[i]
  }

  let somaMaxima = sum - valorMinimo
  let somaMinima = sum - valorMaximo
  console.log(somaMinima + ' ' + somaMaxima);
  
}

miniMaxSum([1, 2, 3, 4, 5]);