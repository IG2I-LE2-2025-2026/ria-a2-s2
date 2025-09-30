// Fonction qui effectue un appel AJAX
function ajax(url, oConfig) {
	var request = new XMLHttpRequest(); 
	var type = oConfig.type,
	    donnees = oConfig.donnees,
	    callback = oConfig.callback;
	
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
