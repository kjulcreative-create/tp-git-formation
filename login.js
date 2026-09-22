// Formulaire de connexion
function login() {
  const x = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!x || !password) {
    alert("Veuillez saisir votre email et votre mot de passe.");
    return false;
  }

  console.log("Connexion de l'utilisateur : " + x);
  return true;
}
