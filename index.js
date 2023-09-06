// Variables globales

//Fields
let nombre = document.querySelector("#nombre-pro");
let presentacion = document.querySelector("#presentacion-pro");
let precio = document.querySelector("#precio-pro");
let imagen = document.querySelector("#imagen-pro");

//Bottons
let btnSave = document.querySelector(".btn-guardar");
let btnUpdate = document.querySelector(".btn-actualizar");

//Table
let tabla = document.querySelector(".table tbody");

//Inputs
let buscarInput = document.querySelector(".buscar-input");

let productoSeleccionadoIndex = null;
let productosKey = "productos";
let productos = getLocalStorage();

//Functions
function getLocalStorage() {
  return JSON.parse(localStorage.getItem(productosKey)) || [];
}

document.addEventListener("DOMContentLoaded", function () {
  showData();
  btnSave.addEventListener("click", guardarProducto);
  btnUpdate.addEventListener("click", actualizarProducto);
});

function getData() {
  if (
    nombre.value.trim() === "" ||
    presentacion.value.trim() === "" ||
    precio.value.trim() === "" ||
    imagen.value.trim() === ""
  ) {
    alert("Debes completar todos los campos.");
    return null;
  }

  return {
    nombre: nombre.value,
    presentacion: presentacion.value,
    precio: precio.value,
    imagen: imagen.value,
  };
}

function guardarProducto() {
  const datos = getData();
  if (!datos) return;

  productos.push(datos);
  guardarProductos(productos);

  cleanFields();
  showData();
  alert("Products saved");
}

function guardarProductos(productos) {
  localStorage.setItem(productosKey, JSON.stringify(productos));
}

function showData() {
  limpiarTabla();

  productos.forEach((producto, i) => {
    let fila = document.createElement("tr");
    fila.innerHTML = `
            <td>${i + 1}</td>
            <td>${producto.nombre}</td>
            <td>${producto.presentacion}</td>
            <td>${producto.precio}</td>
            <td><img src="${producto.imagen}" width="20%"></td>
            <td>
                <button class="btn btn-warning" onclick="editarProducto(${i})">Editar</button>
                <button class="btn btn-danger" onclick="eliminarProducto(${i})">Eliminar</button>
            </td>
        `;
    tabla.appendChild(fila);
  });
}

function limpiarTabla() {
  tabla.innerHTML = "";
}

function cleanFields() {
  nombre.value = "";
  presentacion.value = "";
  precio.value = "";
  imagen.value = "";
}

function editarProducto(index) {
  let producto = productos[index];

  nombre.value = producto.nombre;
  presentacion.value = producto.presentacion;
  precio.value = producto.precio;
  imagen.value = producto.imagen;

  btnSave.classList.add("d-none");
  btnUpdate.classList.remove("d-none");
  productoSeleccionadoIndex = index;
}

function actualizarProducto() {
  if (productoSeleccionadoIndex !== null) {
    productos[productoSeleccionadoIndex] = {
      nombre: nombre.value,
      presentacion: presentacion.value,
      precio: precio.value,
      imagen: imagen.value,
    };

    guardarProductos(productos);
    cleanFields();
    showData();

    btnSave.classList.remove("d-none");
    btnUpdate.classList.add("d-none");
    productoSeleccionadoIndex = null;
  }
}

function eliminarProducto(index) {
  let confirmar = confirm(
    "¿Estás seguro de que deseas eliminar este producto?"
  );
  if (confirmar) {
    productos.splice(index, 1);
    guardarProductos(productos);
    showData();
  }
}

function buscarProducto() {
  let textoBuscado = buscarInput.value.toLowerCase().trim();

  limpiarTabla();

  productos.forEach((producto, i) => {
    if (producto.nombre.toLowerCase().includes(textoBuscado)) {
      let fila = document.createElement("tr");
      fila.innerHTML = `
                <td>${i + 1}</td>
                <td>${producto.nombre}</td>
                <td>${producto.presentacion}</td>
                <td>${producto.precio}</td>
                <td><img src="${producto.imagen}" width="20%"></td>
                <td>
                    <button class="btn btn-warning" onclick="editarProducto(${i})">Editar</button>
                    <button class="btn btn-danger" onclick="eliminarProducto(${i})">Eliminar</button>
                </td>
            `;
      tabla.appendChild(fila);
    }
  });
}
