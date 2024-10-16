function miFuncion(email) {
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const dominiosPermitidos = ["gmail.com", "hotmail.com", "yahoo.com"];
  
    if (!patron.test(email)) {
      return false;
    }
  
    const dominio = email.split("@")[1];
    if (!dominiosPermitidos.includes(dominio)) {
      return false;
    }
  
    return true;
  }