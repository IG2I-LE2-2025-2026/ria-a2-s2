// Fnction de traitement en boucle

function boucle(
  iPeriode,
  fnCbTraitement,
  fnCbContinuer = function() { return true; }
) {
  // Objectif : déclencher un appel à la fonction fnCbTraitement
  // toutes les iPeriode secondes, 
  // tant que fnCbContinuer renvoie vrai

  // fnCbTraitement est une fonction de rappel ("CALLBACK")
  // elle sera appelée plus tard
  // pour l'appeler, il suffit d'ajouter les parenthèses !

  // rendre le 3ème argument optionnel
  
  /*
  // Version « à l'ancienne » :
  if (fnCbContinuer === undefined) {
    fnCbContinuer = function() { return true; };
  }
  */
  
  function repetition() {
    console.log("repetition");
    if (fnCbContinuer()) {
      fnCbTraitement();
      window.setTimeout(repetition, iPeriode * 1000);
    }
  }
  
  // Appelle reptition dans iPeriode secondes
  window.setTimeout(repetition, iPeriode * 1000);
}
