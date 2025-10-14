// Fonctions pour le suggest
function chargerSuggestions() {
  var recherche = val("recherche");
  console.log("chargerSuggestions : " + recherche);
  // TODO : requête AJAX avec recherche
  ajax({
  	donnees : {debutNom: recherche},
    'url': 'data_bdd.php',
    'callback': function(sJSON_resultat) {
    	var oRes = JSON.parse(sJSON_resultat); 
    	var i; 
    	
    	console.log(oRes);
    	var r = ""; 
    	// parcourir l'objet 
    	// pour produire la structure XHTML à intégrer 
    	for(i=0;i<oRes.etudiants.length;i++) {
    		r += "<div class=\"suggestion\">" + 
    			oRes.etudiants[i].prenom +
    			" " + 
    			oRes.etudiants[i].nom
    			+"</div>";
    	}

      html("suggest", r);
    },
  });
}

function validerSuggestion(e) {
  console.log(e);
  val("recherche", html(e.target));
}
