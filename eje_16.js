function miFuncion() {
    // Solicitar datos al usuario
    let monto = parseFloat(prompt("Ingrese el monto: "));
    let descuento = parseFloat(prompt("Ingrese el descuento (%): "));
  
    // Validar que el descuento no sea mayor que 100%
    while (descuento > 100) {
      descuento = parseFloat(prompt("El descuento no puede ser mayor que 100%. Ingrese el descuento (%): "));
    }
  
    // Calcular el monto final
    let montoFinal = monto - (monto * (descuento / 100));
  
    // Mostrar el resultado
    alert(`El monto final después de aplicar el descuento es: ${montoFinal}`);
  }
  
  // Llamar a la función
  miFuncion();