function miFuncion() {
    let texto = prompt("Ingrese una cadena de texto: ");
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Eliminar acentos
    texto = texto.toLowerCase(); // Convertir a minúsculas
  
    let vocales = 0;
    let consonantes = 0;
  
    for (let i = 0; i < texto.length; i++) {
      const caracter = texto[i];
  
      if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        vocales++;
      } else if (caracter.match(/[bcdfghjklmnñpqrstvwxyz]/)) {
        consonantes++;
      }
    }
  
    return `Vocales: ${vocales}, Consonantes: ${consonantes}`;
  }
  
  console.log(miFuncion());