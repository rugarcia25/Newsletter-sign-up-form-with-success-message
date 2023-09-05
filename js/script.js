const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity(
      "¡Se esperaba una dirección de correo electrónico!"
    );
  } else {
    email.setCustomValidity("");
  }
});
