function iniciarsesion() {
    const arrayusers = ["manfredo", "ines", "admin"];
    const contraseña = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    if (arrayusers.includes(username) && contraseña === "marienk") {
        document.location.href = "secreto.html";
    } else {
        const mensaje= document.getElementById("mensaje");
        mensaje.textContent = "contraseña o usuario incorrecto";
        mensaje.style.color = "red";
    }
}

  const toggle = document.getElementById('modoOscuroToggle');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
  });

