function miFuncion(nombre) {
    const patron = /^[a-zA-ZÁÉÍÓÚÜÑáéíóúüñ\s]+$/;
    const palabras = nombre.split(" ");
    const minPalabras = 2;
    const maxPalabras = 5;
  
    if (palabras.length < minPalabras || palabras.length > maxPalabras) {
      return false;
    }
  
    for (let i = 0; i < palabras.length; i++) {
      if (!patron.test(palabras[i])) {
        return false;
      }
    }
  
    return true;
  }