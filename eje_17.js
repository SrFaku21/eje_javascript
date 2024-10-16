function miFuncion(fecha) {
    const diferenciaAnios = calcularDiferenciaAnios(fecha);
    return `${diferenciaAnios} año${diferenciaAnios > 1 ? 's' : ''}`;
  }
  
  function calcularDiferenciaAnios(fecha) {
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const anioFecha = fecha.getFullYear();
    return anioActual - anioFecha;
  }