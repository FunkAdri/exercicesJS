var reponse = prompt("Comment t'appelles-tu ?", "<Entrez ton prénom ici>");
if( reponse == null ){
    alert("Annulé");
} else {
    alert("Bonjour " + reponse + ", ça farte ?");
}
