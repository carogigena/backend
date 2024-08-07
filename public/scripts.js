
//const PORT = process.env.PORT || 3000;
//const HOST = 'jcgigena.alwaysdata.net';

//const { response } = require("express");


const apiUrl ='https://jcgigena.alwaysdata.net';// 'http://localhost:3000';//'http://jcgigena.alwaysdata.net';//`${HOST}:${PORT}`;//;

//Productos

document.getElementById('produc-form').addEventListener('submit', (event) => {
    event.preventDefault();
    addProducto();
});


/*async function listaProductos() {
    await fetch(`${apiUrl}/productos`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            const producList = document.getElementById('produc-list');
            producList.innerHTML = '';
            data.forEach(produc => {

                const li = document.createElement('li');
                li.innerHTML = `<strong>${produc.nombre}</strong>`;
                li.innerHTML += `<br>Descripcion: ${produc.descripcion}`;
                li.innerHTML += `<br>Precio:${produc.precio}`;
                li.innerHTML += `<br>Stock: ${produc.stock}`;
                li.innerHTML += `<br><img src="${produc.link_img}" alt="Producto Imagen">`;
                li.innerHTML += `<button onclick="editProducto(${produc.idproducto})">Editar</button>`;
                li.innerHTML += `<button onclick="deleteProducto(${produc.idproducto})">Eliminar</button>`;
                producList.appendChild(li);
            });

        });
}
*/
async function listaProductos() {
    await fetch(`${apiUrl}/productos`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            const producList = document.getElementById('interior-container');
            producList.innerHTML = '';
            data.forEach(produc => {
                const div = document.createElement('div');
                div.innerHTML = `<div class="item-interior" >
                    <div class="card" style="width: 24rem;">
                        <img src="${produc.link_img}" class="card-img-top"
                            alt="Potus">
                        <div class="card-body botanico">
                            <h5 class="card-title">${produc.nombre}</h5>
                            <button class="btn btn-light" onclick="editProducto(${produc.idproducto})">Editar</button>
                            <button class="btn btn-light" onclick="deleteProducto(${produc.idproducto})">Eliminar</button>
                        </div>
                    </div>
                </div>`;
                producList.appendChild(div);

            
            
            });

        });
}

async function addProducto() {
    const nombre = document.getElementById('produc-nombre').value;
    const descripcion = document.getElementById('produc-descripcion').value;
    const precio = document.getElementById('produc-precio').value;
    const stock = document.getElementById('produc-stock').value;
    const tipo = document.getElementById('produc-tipo').value;
    //const tipo = document.getElementById('produc-tipo').value;
    const linkimage = document.getElementById('produc-image').value;
    console.log(JSON.stringify({
        nombre: nombre, descripcion: descripcion, precio: precio, stock: stock
        , link_img: linkimage, tipoproducto_idtipoproducto: tipo
    }));
    await fetch(`${apiUrl}/productos`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT'
        },
        body: JSON.stringify({
            nombre: nombre, descripcion: descripcion, precio: precio, stock: stock
            , link_img: linkimage, tipoproducto_idtipoproducto: tipo
        })
    })
        .then(response => {
            console.log(response);
            location.href='productos.html';
        })
}

async function editProducto(id) {
    await fetch(`${apiUrl}/productos/${id}`)
        .then(response => response.json())
        .then(producto => {
           const newName = prompt('Ingrese nuevo nombre:', producto[0].nombre) || producto.nombre;
            const newDescripcion = prompt('Ingrese nueva descripción:', producto[0].descripcion) || producto.descripcion;
            const newPrecio = prompt('Ingrese nuevo precio:', producto[0].precio) || producto.precio;
            const newStock = prompt('Ingrese nuevo stock:', producto[0].stock) || producto.stock;
            const newImage = prompt('Ingrese nueva URL de la imagen:', producto[0].link_img) || producto.link_img;

             fetch(`${apiUrl}/productos/${id}`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT'
                },
                body: JSON.stringify({ nombre: newName, descripcion: newDescripcion, precio: newPrecio,
                     stock: newStock, link_img: newImage })
            })
                .then(response => response.json())
                .then(() => listaProductos());
        });
}


async function deleteProducto(id) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
        //console.log(`${apiUrl}/productos/${id}`);
       await fetch(`${apiUrl}/productos/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'DELETE, GET, OPTIONS, POST,PUT'
            },
        })
        .then(() => listaProductos());
    }
}



//Tipos de productos;
async function listaTipoProducto() {
    await fetch(`${apiUrl}/tipoproductos`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            const tipoproducList = document.getElementById('produc-tipo');
            data.forEach(produc => {
                const option = document.createElement('option');
                option.text = produc.nombre;
                option.value = produc.idtipoproducto;
                tipoproducList.appendChild(option);
            });

        });
}
listaTipoProducto();