function encontrarParejaConMismaInicial(invitados) {
    for (let i = 0; i < invitados.length - 1; i++) {
      const invitado1 = invitados[i];
      const invitado2 = invitados[i + 1];
  

      const inicial1 = invitado1[0].toUpperCase();
      const inicial2 = invitado2[0].toUpperCase();
  

      if (inicial1 === inicial2) {
        return [invitado1, invitado2];
      }
    }
  
    return null; 
  }
  
  
  const listaDeInvitados = ["Ana", "Alejandro", "David", "Daniel", "Rubi", "Carlos"];
  const parejaEncontrada = encontrarParejaConMismaInicial(listaDeInvitados);
  
  if (parejaEncontrada) {
    console.log("La pareja que puede sentarse junta es:", parejaEncontrada);
  } else {
    console.log("No se encontró ninguna pareja de invitados con la misma inicial.");
  }