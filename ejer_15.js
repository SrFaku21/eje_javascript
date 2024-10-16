function miFuncion(numero, base) {
    if (base === 2) { // Convertir de binario a decimal
      return parseInt(numero, 2);
    } else if (base === 10) { // Convertir de decimal a binario
      return numero.toString(2);
    } else {
      throw new Error("Base no soportada");
    }
  }
  
  // Solicitar datos al usuario
  let numero = prompt("Ingrese un número:");
  let base = parseInt(prompt("Ingrese la base (2 para binario o 10 para decimal):"));
  
  // Validar que la base sea válida
  while (base !== 2 && base !== 10) {
    base = parseInt(prompt("Base inválida. Ingrese la base (2 para binario o 10 para decimal):"));
  }
  
  // Realizar la conversión
  let resultado;
  if (base === 2) {
    resultado = miFuncion(numero, base);
    console.log(`El número binario ${numero} es igual a ${resultado} en decimal.`);
  } else {
    resultado = miFuncion(numero, base);
    console.log(`El número decimal ${numero} es igual a ${resultado} en binario.`);
  }