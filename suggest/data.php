<?php
if (isset($_GET["debutNom"])) 
{
	$cherche = $_GET["debutNom"]; 
	
	// On va ouvrir un fichier et afficher les lignes 
	// où le prénom ou le nom contient ce texte

	$tabLignes = file("LE2_2025_2026.csv");
	foreach ($tabLignes as $ligne)
	{
		// EXO1 : effectuer une recherche sur nom ou prénom 
		if (
		preg_match("/^(.*):(" . $cherche . ".*):.*$/i",$ligne,$tabResultats)
		||
		preg_match("/^(".$cherche . ".*):(.*):.*$/i",$ligne,$tabResultats)
		)
		{
			// EXO2 afficher nom ET prénom 
			 
			echo "<div class=\"suggestion\">"; 
			echo $tabResultats[2] . " " . $tabResultats[1];
			echo "</div>"; 
		}
	}

	die("");
}
/*
/^.*:(" . $cherche . ".*)$/i
/expression ici/drapeaux
drapeau : i <=> insensibilité à la casse 
expression : ^.*:(" . $cherche . ".*)$ 
expression avec remplacement de $cherche : ^.*:(Th.*)$
^ <=> début 
$ <=> fin 
. <=> un caractère 
* <=> répétition 0-n fois du motif qui précède 
( ) <=> parenthèses capturantes : permet d'extraire une zone 
*/
?>







