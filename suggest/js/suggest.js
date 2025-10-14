// Fonctions pour le suggest
function chargerSuggestions() {
  var recherche = val("recherche");
  console.log("chargerSuggestions : " + recherche);
  // TODO : requête AJAX avec recherche
  ajax({
  	donnees : {debutNom: recherche},
    'url': 'data.php',
    'callback': function(r) {
      html("suggest", r);
    },
  });
}

function validerSuggestion(e) {
  console.log(e);
  val("recherche", html(e.target));
}
