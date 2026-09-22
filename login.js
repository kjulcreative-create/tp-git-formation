// Formulaire de connexion
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Veuillez saisir votre email et votre mot de passe.");
    return false;
  }

  console.log("Connexion de l'utilisateur : " + email);
  return true;
}
