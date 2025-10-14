var cache = {
	currentSuggestions : [], 
	lastSuggestions : {}
};

// Fonctions pour le suggest
function chargerSuggestions() {
  var recherche = val("recherche");
  console.log("chargerSuggestions : " + recherche);
  // TODO : d'abord tester si la recherche a déjà été faite et si on dispose d'un résultat en cache
  // Si oui, on s'en sert 
  // Si non, alors on peut faire une requete AJAX 
  ajax({
  	donnees : {debutNom: recherche},
    'url': 'data_bdd.php',
    'callback': function(sJSON_resultat) {
    	var oRes = JSON.parse(sJSON_resultat); 
    	var i; 
    	cache.currentSuggestions = oRes.etudiants;
    	cache.lastSuggestions[recherche] = oRes.etudiants;

    	// on stocke notre cache en var. globale 
    	
    	// meilleure solution : 
    	// API HTML : https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Use_data_attributes
    	
    	// alternative possible pour garder la donnée persitante : https://developer.mozilla.org/fr/docs/Web/API/Web_Storage_API
    	
    	// Penser aussi aux solutions s'appuyant sur les websockets HTTP : plus efficient qu'AJAX
    	
    	var r = ""; 
    	// On suggère P. NOM 
    	for(i=0;i<oRes.etudiants.length;i++) {
    		r += "<div id=\"" + i + "\" class=\"suggestion\">" + 
    			oRes.etudiants[i].prenom.substring(0,1) +
    			". " + 
    			oRes.etudiants[i].nom
    			+"</div>";
    	}

      html("suggest", r);
    },
  });
}

function validerSuggestion(e) {
  console.log(e);
  // On doit insérer Prénom N. (indice)
  // Comment retrouver l'indice dans le cache menant aux données de l'élément cliqué ?
  var meta = cache.currentSuggestions[e.target.id] ; 
  val("recherche", meta.prenom + " " + meta.nom.substring(0,1) + "(" + meta.id +")");
}




