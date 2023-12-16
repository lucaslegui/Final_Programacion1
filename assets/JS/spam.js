function mostrarOferta(categoria) {
    let ofertaEspecial = document.getElementById("ofertaEspecial");
  
    ofertaEspecial = document.createElement("div");
    ofertaEspecial.id = "ofertaEspecial";
    ofertaEspecial.classList.add("oferta-especial");
    document.body.appendChild(ofertaEspecial);
    ofertaEspecial.innerHTML = "";
  
    // agregar la imagen a la categoria
    const imagen = document.createElement("img");
    imagen.src = `assets/IMG/ofertas/banner-${categoria}.gif`; 
    ofertaEspecial.appendChild(imagen);
  
    ofertaEspecial.style.display = "block";

    const botonCerrar = document.createElement("button");
    botonCerrar.textContent = "X";
    botonCerrar.classList.add("boton-cerrar-oferta");
    ofertaEspecial.appendChild(botonCerrar);

    botonCerrar.onclick = function() {
        ofertaEspecial.style.display = "none";
    };

    setTimeout(() => {
      ofertaEspecial.style.display = "none";
    }, 9000);
  }