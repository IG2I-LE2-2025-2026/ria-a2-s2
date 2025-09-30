// Fnction de traitement en boucle

function boucle(
  iPeriodeOuJSON,
  fnCbTraitement,
  fnCbContinuer = function() { return true; }
) {
  // Objectif : déclencher un appel à la fonction fnCbTraitement toutes les iPeriode secondes, 
  
  var iPeriode;
  var oDefaut = {
    periode: 1,
    continuer: function() { return true; }
  }

  function enrichir(oDefaut, oModif) {
    // Enrichir oModif avec le contenu de oDefaut
    
    // Si pas de fonctions dans l'objet :
    //var oRes = JSON.parse(JSON.stringify(oModif));
    
    var oRes = {};
    // On recopie oModif dans oRes (copie superficielle, mais ici c'est suffisant car pas b'objets imbriqués)
    for (prop in oModif) {
      oRes[prop] = oModif[prop];
    }
    // On complète avec le contenu de oDefaut
    for (prop in oDefaut) {
      if (oRes[prop] === undefined) {
        oRes[prop] = oDefaut[prop];
      }
    }
    return oRes;
  }
  
  // Cas arguments classiques ou JSON
  if (typeof iPeriodeOuJSON === "number") {
    iPeriode = iPeriodeOuJSON;
  } else {
    // iPeriodeOuJSON est un objet
    var oRes = enrichir(oDefaut, iPeriodeOuJSON);
    iPeriode = oRes.periode;
    fnCbTraitement = oRes.traitement;
    fnCbContinuer = oRes.continuer;
  }
  
  //function repetition() {
  var repetition = function() {
    console.log("repetition");
    if (fnCbContinuer()) {
      fnCbTraitement();
      window.setTimeout(repetition, iPeriode * 1000);
    }
  }
  
  // Appelle reptition dans iPeriode secondes
  window.setTimeout(repetition, iPeriode * 1000);
}
