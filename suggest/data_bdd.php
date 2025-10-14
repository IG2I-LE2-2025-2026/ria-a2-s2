<?php

// besoin des librairies maLibSQL et maLibUtils ... 
// NB : ne pas oublier de modifier config.php !!
include_once("libs/maLibUtils.php"); 
include_once("libs/maLibSQL.pdo.php"); 

$data = array("promo" => "LE2", "annee" => 2025, "etudiants" => array()); 
if ($debutNom = valider("debutNom")) { 
	$SQL = "SELECT * FROM etudiants ";
	$SQL .= " WHERE nom LIKE '$debutNom%' "; 
	$SQL .= " OR prenom LIKE '$debutNom%' "; 
	$data["etudiants"] = parcoursRs(SQLSelect($SQL));
}
echo json_encode($data);

?>







