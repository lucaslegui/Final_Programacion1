//array de objetos que continen los productos
const computadoras = [
  {
    categoria: "computadoras",
    nombre: "PC Escritorio Intel",
    imagen: "assets/IMG/productos/computadora1.webp",
    detalles:
      "CPU I3 3200Mhz – 8GB DDR3 – SSD 240GB – Sistema Operativo Windows 11",
    estrellas: "assets/IMG/estrellas.png",
    precio: 129999,
    stock: 120,
  },
  {
    categoria: "computadoras",
    nombre: "PC Escritorio Advanced",
    imagen: "assets/IMG/productos/computadora2.webp",
    detalles:
      "CPU I5 9600K – 8GB DDR3 – SSD 240GB – Sistema Operativo Windows 11",
    estrellas: "assets/IMG/estrellas.png",
    precio: 158394,
    stock: 90,
  },
  {
    categoria: "computadoras",
    nombre: "PC Escritorio Expert",
    imagen: "assets/IMG/productos/computadora3.webp",
    detalles:
      "CPU I5 11600K – 16GB DDR3 – SSD 240GB – Sistema Operativo Windows 11",
    estrellas: "assets/IMG/estrellas.png",
    precio: 174299,
    stock: 97,
  },
  {
    categoria: "computadoras",
    nombre: "PC Gamer Intel",
    imagen: "assets/IMG/productos/computadora4.webp",
    detalles:
      "CPU I7 11Gen – 8GB DDR4 – SSD 240GB – Sistema Operativo Windows 11",
    estrellas: "assets/IMG/estrellas.png",
    precio: 199998,
    stock: 45,
  },
  {
    categoria: "computadoras",
    nombre: "PC Gamer AMD",
    imagen: "assets/IMG/productos/computadora5.webp",
    detalles:
      "CPU Amd Ryzen 5 – 16GB DDR4 – SSD 512GB – Sistema Operativo Windows 11",
    estrellas: "assets/IMG/estrellas.png",
    precio: 298999,
    stock: 15,
  },
  {
    categoria: "computadoras",
    nombre: "PC God Level Intel",
    imagen: "assets/IMG/productos/computadora6.webp",
    detalles:
      "CPU Intel I7 12700 – 32GB DDR4 – SSD 512GB – Sistema Operativo Windows 11",
    estrellas: "assets/IMG/estrellas.png",
    precio: 534798,
    stock: 2,
  },
];

const teclados = [
  {
    categoria: "teclados",
    nombre: "Teclado Gamer Good Game",
    imagen: "assets/IMG/productos/teclado1.webp",
    detalles: "Teclado 80% Rainbow Blue Switch Esp Negro Español Latinoamérica",
    estrellas: "assets/IMG/estrellas.png",
    precio: 13999,
    stock: 250,
  },
  {
    categoria: "teclados",
    nombre: "Teclado Hyperx",
    imagen: "assets/IMG/productos/teclado2.webp",
    detalles: "Teclado Mecanico 60% Gamer Edicion Arena RGB - Color rosa",
    estrellas: "assets/IMG/estrellas.png",
    precio: 12590,
    stock: 24,
  },
  {
    categoria: "teclados",
    nombre: "Teclado Mecánico T-dagger",
    imagen: "assets/IMG/productos/teclado3.webp",
    detalles: "Mecanico Gamer 60% T-dagger Arena Azul Rgb Brown",
    estrellas: "assets/IMG/estrellas.png",
    precio: 4394,
    stock: 60,
  },
  {
    categoria: "teclados",
    nombre: "Teclado Mecánico Marvo",
    imagen: "assets/IMG/productos/teclado4.webp",
    detalles: "Kg962 60% Switch Red Rainbow Negro Inglés",
    estrellas: "assets/IMG/estrellas.png",
    precio: 9941,
    stock: 24,
  },
  {
    categoria: "teclados",
    nombre: "Teclado Redragon Dragonborn",
    imagen: "assets/IMG/productos/teclado5.webp",
    detalles:
      "Teclado K630 QWERTY Redragon Brown inglés US color negro con luz RGB",
    estrellas: "assets/IMG/estrellas.png",
    precio: 21999,
    stock: 315,
  },
  {
    categoria: "teclados",
    nombre: "Teclado Gamer Mecanico Redragon Mitra K551rgb Español Rgb",
    imagen: "assets/IMG/productos/teclado6.webp",
    detalles:
      "Reforzado con placa de acero, con teclas de doble inyección y diseño anti salpicaduras. ",
    estrellas: "assets/IMG/estrellas.png",
    precio: 37000,
    stock: 250,
  },
];

const mouse = [
  {
    categoria: "mouse",
    nombre: "Mouse Gamer Noga Retroiluminado 2400 Dpi Usb Storme",
    imagen: "assets/IMG/productos/mouse1.webp",
    detalles: "Mouse Gamer con Retroiluminación LED multicolor.",
    estrellas: "assets/IMG/estrellas.png",
    precio: 1200,
    stock: 790,
  },
  {
    categoria: "mouse",
    nombre: "Mouse inalámbrico Logitech M280",
    imagen: "assets/IMG/productos/mouse2.webp",
    detalles:
      "Su diseño eficaz hace de este mouse un elemento cómodo, con una gran experiencia de uso para aquellas personas que buscan seguridad en cada click",
    estrellas: "assets/IMG/estrellas.png",
    precio: 10386,
    stock: 90,
  },
  {
    categoria: "mouse",
    nombre: "Mouse inalambrico Recargable 2.4g Portatil Bluetooth Luz Led",
    imagen: "assets/IMG/productos/mouse3.webp",
    detalles: "Mouse Inalámbrico Bluetooth 800 / 1200 / 1600 DPI con Luz LED",
    estrellas: "assets/IMG/estrellas.png",
    precio: 3499,
    stock: 97,
  },
  {
    categoria: "mouse",
    nombre: "Mouse Xinua M8 Gamer Recargable Luz Rgb 6 Botones",
    imagen: "assets/IMG/productos/mouse4.webp",
    detalles:
      "Navegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.",
    estrellas: "assets/IMG/estrellas.png",
    precio: 7790,
    stock: 45,
  },
  {
    categoria: "mouse",
    nombre: "Mouse gamer Logitech G Series Lightsync G203 negro",
    imagen: "assets/IMG/productos/mouse5.webp",
    detalles:
      "Solo debés colocar el receptor en un puerto USB de la computadora y ya podés empezar a usarlo. No hace falta emparejar el mouse ni descargar software para utilizarlo.",
    estrellas: "assets/IMG/estrellas.png",
    precio: 17050,
    stock: 15,
  },
  {
    categoria: "mouse",
    nombre: "Mouse Logitech Master Series MX Master 3 grafito",
    imagen: "assets/IMG/productos/mouse6.webp",
    detalles:
      "Su sensor Darkfield te permitirá accionar con gran detalle y exactitud, gracias a su tecnología de seguimiento.",
    estrellas: "assets/IMG/estrellas.png",
    precio: 69000,
    stock: 12,
  },
];

const notebooks = [
  {
    categoria: "notebooks",
    nombre: "HP 15s-fq2171ns",
    imagen: "assets/IMG/productos/notebook1.webp",
    detalles:
      'Peso: 1,69 kg, Procesador: Intel Core i3-1115G4, RAM: 8 GB DDR4, Almacenamiento: SSD M.2 de 256 GB, GPU: Intel UHD Graphics, Pantalla: FHD 15,6", Puertos: 3 USB 3.0, 1 HDMI, Batería: 3 celdas Ion de litio 41Wh',
    estrellas: "assets/IMG/estrellas.png",
    precio: 399999.99,
    stock: 50,
  },
  {
    categoria: "notebooks",
    nombre: "HP Victus 16-e0085ns",
    imagen: "assets/IMG/productos/notebook2.webp",
    detalles:
      'Dimensiones: 337 x 26 x 2,35 cm, Peso: 2,46 kg, Procesador: AMD Ryzen 5 5600H, RAM: 8GB DDR4-SDRAM, Almacenamiento: 512GB SSD M.2 NVMe PCIe, GPU: NVIDIA GeForce GTX 1650, Pantalla: 16.1" FHD a 144 Hz, Puertos: USB Type-C, USB Type-A, HDMI 2.0, RJ-45, Batería: 4 celdas Ion de litio 70Wh',
    estrellas: "assets/IMG/estrellas.png",
    precio: 799999,
    stock: 40,
  },
  {
    categoria: "notebooks",
    nombre: "Acer Nitro 5",
    imagen: "assets/IMG/productos/Acer Nitro 5.webp",
    detalles:
      'Dimensiones: 236,5 x 23,85 x 1,97 cm, Peso: 1,67 kg, Procesador: AMD Ryzen 5 5500U, RAM: 16 GB DDR4, Almacenamiento: 1 TB SSD, GPU: AMD Radeon Graphics, Pantalla: 15.6" FullHD IPS, Puertos: HDMI, USB 2.0, USB 3.0, Ethernet, Audio jack, Lector de Tarjetas, Batería: 55Wh Ion de litio',
    estrellas: "assets/IMG/estrellas.png",
    precio: 714000,
    stock: 35,
  },
  {
    categoria: "notebooks",
    nombre: "MSI Modern 14 B11MOU-1063XES",
    imagen: "assets/IMG/productos/MSI Modern 14 B11MOU-1063XES.webp",
    detalles:
      'Dimensiones: 319 x 220.2 x 16.9 mm, Peso: 1,29 kg, Procesador: Intel Core i7-1255U, RAM: 16 GB, Almacenamiento: 512GB SSD, GPU: UHD Graphics, Pantalla: 14" FHD IPS-Level, Puertos: USB Type-C, USB Type-A, HDMI, Lector de tarjetas Micro SD, Batería: 4 celdas Ion de litio 50 Whr',
    estrellas: "assets/IMG/estrellas.png",
    precio: 789000,
    stock: 25,
  },
  {
    categoria: "notebooks",
    nombre: "Lenovo IdeaPad Gaming 3 Gen 6",
    imagen: "assets/IMG/productoS/Lenovo IdeaPad Gaming 3 Gen 6.webp",
    detalles:
      'Dimensiones: 359.6 x 251.9 x 24.2 mm, Peso: 2,2 kg, Procesador: AMD Ryzen 7 5800H, RAM: 16GB, Almacenamiento: 512 SSD M.2 PCIe NVMe, GPU: NVIDIA GeForce RTX 3050, Pantalla: 15,6" FHD, Puertos: USB 3.2 Gen 1, USB-C, HDMI 2.0, Ethernet, Audio jack, Batería: Integrada 45Wh',
    estrellas: "assets/IMG/estrellas.png",
    precio: 1108000,
    stock: 20,
  },
  {
    categoria: "notebooks",
    nombre: "ASUS TUF Gaming F15 FX506LHB",
    imagen: "assets/IMG/productos/ASUS TUF Gaming.webp",
    detalles:
      "Dimensiones: 360 x 262 x 25 ~ 26mm, Peso: 2,2 Kg, Procesador: Intel Core i5-10300H, RAM: 16 GB, Almacenamiento: 512GB SSD M.2 NVMe PCIe 3.0, GPU: NVIDIA GeForce GTX 1650, Pantalla: 15.6 FHD 144Hz, Puertos: USB 2.0, USB 3.0, USB Type- C, HDMI, Ethernet, Audio jack, Batería: 3 celdas Ion de litio 48 Wh",
    estrellas: "assets/IMG/estrellas.png",
    precio: 980000,
    stock: 15,
  },
];

//declaracion
const mostrarComputadoras = document.querySelector("#mostrandoComputadoras");
const mostrarNotebooks = document.querySelector("#mostrandoNotebooks");
const mostrarTeclados = document.querySelector("#mostrandoTeclados");
const mostrarMouse = document.querySelector("#mostrandoMouse");

// mostrar productos onload
window.onload = function () {
  mostrarProductos(computadoras, mostrarComputadoras);
  mostrarProductos(teclados, mostrarTeclados);
  mostrarProductos(mouse, mostrarMouse);
  mostrarProductos(notebooks, mostrarNotebooks);
};

//funcion principal para mostrar los productos en el div
function mostrarProductos(productos, contenedor) {
  //cambiar color y texto cuando el boton esta activo

  for (const producto of productos) {
    //cargar productos
    let div = document.createElement("div");
    div.classList.add("card");

    let img1 = document.createElement("img");
    img1.src = producto.imagen;
    img1.alt = "Producto";
    div.appendChild(img1);

    let h4 = document.createElement("h4");
    h4.textContent = producto.nombre;
    div.appendChild(h4);

    let divInfo = document.createElement("div");
    divInfo.classList.add("div-info");

    let img2 = document.createElement("img");
    img2.src = producto.estrellas;
    img2.alt = "estrellas";
    divInfo.appendChild(img2);

    let p2 = document.createElement("p");
    p2.textContent = "$" + producto.precio;
    p2.classList.add("precio");
    divInfo.appendChild(p2);

    let stock = document.createElement("p");
    stock.textContent = "Stock: " + producto.stock;
    divInfo.appendChild(stock);

    div.appendChild(divInfo);

    let btnDetalles = document.createElement("button");
    btnDetalles.textContent = "Detalles";
    btnDetalles.classList.add("btnDetalles");
    btnDetalles.onclick = function () {
      mostrarDetalles(producto);
    };
    div.appendChild(btnDetalles);

    let button = document.createElement("button");
    button.textContent = "Agregar al carrito";
    button.classList.add("btnAgregar");
    div.appendChild(button);

    contenedor.appendChild(div); //mostrar estructura en el div
  }
}

/////////////// FILTRO DE PRODUCTOS ///////////////////////

document.getElementById('categorias').addEventListener('change', function() {
  filtrarProductos(this.value);
});

function mostrarOcultarArticulos(categoria) {
  const todasLasCategorias = ['computadoras', 'notebooks', 'teclados', 'mouse'];
  
  todasLasCategorias.forEach(cat => {
      document.getElementById(cat).style.display = (categoria === cat || categoria === '') ? 'block' : 'none';
  });
}

function filtrarProductos(categoria) {
  limpiarContenedores();
  mostrarOcultarArticulos(categoria);

  if (categoria === 'computadoras') {
      mostrarProductos(computadoras, mostrarComputadoras);
  } else if (categoria === 'notebooks') {
      mostrarProductos(notebooks, mostrarNotebooks);
  } else if (categoria === 'teclados') {
      mostrarProductos(teclados, mostrarTeclados);
  } else if (categoria === 'mouse') {
      mostrarProductos(mouse, mostrarMouse);
  } else {
      // mostrar todas las categorias
      mostrarProductos(computadoras, mostrarComputadoras);
      mostrarProductos(notebooks, mostrarNotebooks);
      mostrarProductos(teclados, mostrarTeclados);
      mostrarProductos(mouse, mostrarMouse);
  }
  mostrarOferta(categoria); //mostrar el banner de oferta
}

// limpiar los contenedores de productos
function limpiarContenedores() {
  mostrarComputadoras.innerHTML = '';
  mostrarNotebooks.innerHTML = '';
  mostrarTeclados.innerHTML = '';
  mostrarMouse.innerHTML = '';
}


///////////////////////////////////////////////////////////

// Modal
function mostrarDetalles(producto) {
  let modal = document.getElementById("modal");
  let title = document.getElementById("modal-title");
  let category = document.getElementById("modal-category");
  let image = document.getElementById("modal-image");
  let description = document.getElementById("modal-description");
  let price = document.getElementById("modal-price");
  let buyButton = document.getElementById("modal-comprar-button");

  // Actualizar contenido del modal
  title.textContent = producto.nombre;
  category.textContent = producto.categoria;
  image.src = producto.imagen;
  description.textContent = producto.detalles;
  price.textContent = "$" + producto.precio;
  buyButton.textContent = "Comprar";
  buyButton.producto = producto;
  // mostrar el modal
  modal.style.display = "flex";
}

//boton comprar
document
  .getElementById("modal-comprar-button")
  .addEventListener("click", function (e) {
    const producto = e.target.producto;

    const productoAgregado = {
      cantidad: 1,
      nombre: producto.nombre,
      precio: "$" + producto.precio,
    };

    //saber si un producto ya esta en el carrito
    const productoEnCarrito = carrito.some(
      (producto) => producto.nombre === productoAgregado.nombre
    );

    if (productoEnCarrito) {
      const productos = carrito.map((producto) => {
        if (producto.nombre === productoAgregado.nombre) {
          producto.cantidad++;
          return producto;
        } else {
          return producto;
        }
      });
      carrito = [...productos];
    } else {
      carrito = [...carrito, productoAgregado];
    }
    showToast("Producto agregado al carrito");
    actualizarCarrito();
  });


// cerrar modal
let closeModal = document.getElementsByClassName("close")[0];
closeModal.onclick = function () {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
};

window.onclick = function (event) {
  let modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

///////////////////////// MENSAJE DE AGREGADO AL CARRITO /////////////////////////

function showToast(message) {
  
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.classList.add("toast");

  // Añadir el toast al cuerpo del documento
  document.body.appendChild(toast);

  // Mostrar el toast
  setTimeout(() => {
    toast.classList.add("toast-show");
  }, 100); // Un pequeño retraso para la animación

  // Ocultar y eliminar el toast después de un tiempo
  setTimeout(() => {
    toast.classList.remove("toast-show");
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500); 
  }, 3000); 
}



///////////////////////// CARRITO /////////////////////////

let carrito = [];

//botones
const btnMostrarCarrito = document.querySelector(".carrito-img");
const ventanaModal = document.querySelector("#carrito-modal");
const btnCerrar = document.querySelector("#cerrarCarrito");

//mostar carrito
btnMostrarCarrito.addEventListener("click", function () {
  if (ventanaModal.style.visibility === "visible") {
    ventanaModal.style.visibility = "hidden";
  } else {
    ventanaModal.style.visibility = "visible";
  }
});

//cerrar carrito
btnCerrar.addEventListener("click", function () {
  if (ventanaModal.style.visibility === "visible") {
    ventanaModal.style.visibility = "hidden";
  }
  console.log("boton cerrar");
});

// detector de eventos

document.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("btnAgregar")) {
    const producto = e.target.parentElement;

    const productoAgregado = {
      cantidad: 1,
      nombre: producto.querySelector("h4").textContent,
      precio: producto.querySelector(".div-info p:nth-child(2)").textContent,
    };

    //saber si un producto ya esta en el carrito
    const productoEnCarrito = carrito.some(
      (producto) => producto.nombre === productoAgregado.nombre
    );

    if (productoEnCarrito) {
      const productos = carrito.map((producto) => {
        if (producto.nombre === productoAgregado.nombre) {
          producto.cantidad++;
          return producto;
        } else {
          return producto;
        }
      });
      carrito = [...productos];
    } else {
      carrito = [...carrito, productoAgregado];
    }
    showToast("Producto agregado al carrito");

    actualizarCarrito();
  }
});

function actualizarCarrito() {
  const contenedorProductos = document.querySelector("#lista-carrito tbody");
  contenedorProductos.innerHTML = ""; // solo uso innerHTML para borrar el contenido del tbody.
  let total = 0;

  carrito.forEach((producto, index) => {
    let fila = document.createElement("tr");

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = producto.nombre;
    fila.appendChild(celdaNombre);

    let celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = producto.precio;
    fila.appendChild(celdaPrecio);

    let celdaCantidad = document.createElement("td");
    celdaCantidad.textContent = producto.cantidad;
    fila.appendChild(celdaCantidad);

    // Crear celda para el botón eliminar
    let celdaEliminar = document.createElement("td");
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X"; // Utiliza el texto 'X' para representar una cruz
    botonEliminar.classList.add("btnEliminar");
    botonEliminar.dataset.id = index; // Almacenar el índice del producto en el carrito como un atributo de datos
    celdaEliminar.appendChild(botonEliminar);
    fila.appendChild(celdaEliminar);

    contenedorProductos.appendChild(fila);

    //sumar el precio total, convertir el string a number
    total += parseFloat(producto.precio.slice(1)) * producto.cantidad;
  });
  
  //crando el elemento total en el carrito
  let filaTotal = document.createElement("tr");

  let celdaTotalTexto = document.createElement("td");
  celdaTotalTexto.textContent = "Total:";
  filaTotal.appendChild(celdaTotalTexto);

  let celdaTotalPrecio = document.createElement("td");
  celdaTotalPrecio.textContent = "$" + total;
  filaTotal.appendChild(celdaTotalPrecio);

  contenedorProductos.appendChild(filaTotal);
}

// detector de eventos para los botones de eliminar
document
  .querySelector("#lista-carrito tbody")
  .addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("btnEliminar")) {
      const index = e.target.dataset.id; // recuperar el indice del producto a eliminar del atributo de datos
      carrito.splice(index, 1); // eliminar el producto del carrito
      actualizarCarrito();
    }
  });

// vaciar carrito
document
  .querySelector("#vaciar-carrito")
  .addEventListener("click", function () {
    carrito = []; // vuelve el arrray a default
    actualizarCarrito(); // actualiza el carrito
  });


// mostrar icono carrito en el main
document.addEventListener('DOMContentLoaded', () => {
  const carrito = document.querySelector('.carrito');
  const mainElement = document.querySelector('main');
  const mainElementOffset = mainElement.getBoundingClientRect().top + window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY >= mainElementOffset) {
      carrito.style.display = 'block';
    } else {
      carrito.style.display = 'none';
    }
  });
});