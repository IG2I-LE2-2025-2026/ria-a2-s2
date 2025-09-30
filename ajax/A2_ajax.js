// Fonction qui effectue un appel AJAX
function ajax(urlOrOConfig, oConfig) {
	var request = new XMLHttpRequest(); 
	var oRes, url, type, oDonnees, donnees, callback;

  function enrichir(oDefaut, oModif) {
    // Enrichir oModif avec le contenu de oDefaut
    var oRes = {};
    // On recopie oModif dans oRes (copie superficielle, mais ici c'est suffisant car pas d'objets imbriqués)
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
  
  if (typeof urlOrOConfig === "object") {
    oConfig = urlOrOConfig;
    url = oConfig.url;
  } else {
    if (typeof urlOrOConfig === "string") {
      url = urlOrOConfig;
      if (oConfig === undefined) {
        oConfig = {};
      }
    }
  }
  
  oRes = enrichir({
    'type': 'GET',
    'donnees': '',
    'callback': function(r) { console.log(r) }
  }, oConfig);
  
	type = oRes.type;
	oDonnees = oRes.donnees;
	callback = oRes.callback;
	
	donnees = '';
	for (var prop in oDonnees) {
	  donnees += "&" + prop + "=" + oDonnees[prop];
	}
	donnees = donnees.substring(1);
	
  function traiteReponse()
  {
	  if (request.readyState == 4) 
	  {
	      if (request.status == 200) 
	      {
			    reponse = request.responseText;
			    callback(reponse);
	      }
	  }
  } 
  
	if (type=='GET') 
	{
		request.open("GET", url + "?" + donnees, true);
		donnees=null;
	}
	else 
	{
		request.open("POST", url, true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.setRequestHeader("Content-length", donnees.length);
		request.setRequestHeader("Connection", "close");
	}

	request.onreadystatechange = traiteReponse;
	request.send(donnees);
}

