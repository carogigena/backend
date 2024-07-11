const apiUrl = 'https://jcgigena.alwaysdata.net';



document.getElementById('formlogin').addEventListener('submit', (event) => {
    event.preventDefault();
    login();
});

async function login() {

  const usuario = document.getElementById("loginusuario").value;
  const password = document.getElementById("loginpassword").value;
  const loginError = document.getElementById("errorLogin");

    console.log(JSON.stringify({
     usuario: usuario
    }));


  fetch(`${apiUrl}/usuarios/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
     usuario: usuario, password: password})
    

  }  )
    .then((response) => {
        if (!response.ok) {
            loginError.style.display = "block";
        } else {
            // Enviar a página de inicio
            window.location.href='productos.html'
            loginError.style.display = "none";
            return response.json();
        }
    })
    .catch((error) => {
       console.error("Error:", error);
    })
}
 
