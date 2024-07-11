const apiUrl = 'https://jcgigena.alwaysdata.net';

document.getElementById('formularioregistro').addEventListener('submit', (event) => {
    event.preventDefault();
    addUsuario();

});

async function listaUsuarios() {
    await fetch(`${apiUrl}/usuarios`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            const usuariosList = document.getElementById('usuarios-list');
            usuariosList.innerHTML = '';
            data.forEach(usuarios => {

                const li = document.createElement('li');
                li.innerHTML = `<br>Nombre: ${usuarios.nombres}`;
                li.innerHTML += `<br>Apellido: ${usuarios.apellidos}`;
                li.innerHTML += `<br>DNI:${usuarios.dni}`;
                li.innerHTML += `<br>Provincia: ${usuarios.provincias_idprovincias}`;
                li.innerHTML += `<br>Tipo de usuario: ${usuarios.tipousuario_idtipousuario}`;
                li.innerHTML += `<br>Email: ${usuarios.email}`;
                li.innerHTML += `<br>Password: ${usuarios.password}`;
                li.innerHTML += `<br>Genero: ${usuarios.genero_idgenero}`;
                li.innerHTML += `<button onclick="editUsuario(${usuarios.idusuario})">Editar</button>`;
                li.innerHTML += `<button onclick="deleteUsuario(${usuarios.idusuario})">Eliminar</button>`;
                usuariosList.appendChild(li);
            });

        });
}

async function addUsuario() {
    const nombres = document.getElementById('usu-nombres').value;
    const apellidos = document.getElementById('usu-apellidos').value;
    const numerodni = document.getElementById('usu-dni').value;
    const provincia = document.getElementById('usu-provincia').value;
    const tipodeusuario = document.getElementById('usu-tipousuario').value;
    const email = document.getElementById('usu-email').value;
    const usuario = document.getElementById('usu-usuario').value;
    const password = document.getElementById('usu-password').value;
    const genero = document.getElementById('usu-genero').value;
    console.log(JSON.stringify({
        nombres: nombres, apellidos: apellidos, dni: numerodni, provincias_idprovincias: provincia,
        tipousuario_idtipousuario: tipodeusuario, email: email, usuario: usuario,  password: password, genero_idgenero: genero
    }));
    await fetch(`${apiUrl}/usuarios`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT'
        },
        body: JSON.stringify({
        nombres: nombres, apellidos: apellidos, dni: numerodni, provincias_idprovincias: provincia,
        tipousuario_idtipousuario: tipodeusuario, email: email, usuario: usuario, password: password, genero_idgenero: genero
        })
    })
        .then(response => {
            console.log(response);
        })
}



async function editUsuario(id) {
    await fetch(`${apiUrl}/usuarios/${id}`)
        .then(response => response.json())
        .then(usuarios => {
           const newName = prompt('Ingrese nuevo nombre:', usuarios[0].nombre) || usuario.nombre;
            const newApellido = prompt('Ingrese nuevo apellido:', usuarios[0].apellido) || usuario.apellido;
            const newEmail = prompt('Ingrese nuevo email:', usuarios[0].email) || usuario.email;
            const newUsuario = prompt('Ingrese nuevo usuario:', usuarios[0].usuario) || usuario.usuario;

             fetch(`${apiUrl}/usuarios/${id}`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT'
                },
                body: JSON.stringify({ nombres: newName, apellidos: newApellido, email: newEmail,
                     usuario: newUsuario})
            })
                .then(response => response.json())
                .then(() => listaUsuarios());
        });
}


function deleteUsuario(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
        
        fetch(`${apiUrl}/usuarios/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, GET, OPTIONS, POST,PUT'
            },
        })
        .then(() => listaUsuarios());
    }
}


