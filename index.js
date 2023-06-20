//ajout d'un écouteur d'événement au formulaire avec l'ID "myForm" pour l'événement "submit" quand le formulaire est soumis
//j'ai fait un preventDefault  pour recharger la page par defaut lors de la soumission du formulaire.

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    //j'ai declaré trois variable pour recuperer les valeur de mes champs du formulaire 
    //cela permet de recuperer les id 
    var nomEntreprise = document.getElementById("nomEntreprise").value;
    var dateIntervention = document.getElementById("dateIntervention").value;
    var observation = document.getElementById("observation").value;
    
    
    console.log("Nom de l'entreprise ou du client :", nomEntreprise);
    console.log("Notre technicien est intervenu le :", dateIntervention);
    console.log("Observation :", observation);
    
   
    window.location.href = "index3.html";
    //cela permet de redirigé le navigateur vers ma nouvelle page apres avoir traité les donnes du formulaire
});

