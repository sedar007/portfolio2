// Slider formulaire
var slider = document.getElementById("budget");
var output = document.getElementById("budget-value");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
// Slider formulaire

var mon_formulaire = document.getElementById("mon_formulaire");

mon_formulaire.addEventListener("submit", function(e){

  var mail = document.getElementById("mail");
  var tel = document.getElementById("numero");
  var message = document.getElementById("message");

  if (mail.value.trim()==""){
    var erreur = document.getElementById("erreur_mail");
    erreur.innerHTML ="\r L'adresse mail est requis!";
    erreur.style.color = "red";
    e.preventDefault();
  }

  if (message.value.trim()==""){
    var erreur = document.getElementById("erreur_message");
    erreur.innerHTML ="\r Veuiller saisir votre message!";
    erreur.style.color = "red";
    e.preventDefault();
  }


  if(tel.value.trim()!=""){
    if(isNaN(tel.value)){
      var erreur = document.getElementById("erreur_tel");
      erreur.innerHTML ="\r Valeurs Incorrectes";
      erreur.style.color = "red";
      e.preventDefault();
    }
}






  
})
