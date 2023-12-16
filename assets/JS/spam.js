function mostrarOferta(categoria) {
    let ofertaEspecial = document.getElementById("ofertaEspecial");
  
    ofertaEspecial = document.createElement("div");
    ofertaEspecial.id = "ofertaEspecial";
    ofertaEspecial.classList.add("oferta-especial");
    document.body.appendChild(ofertaEspecial);
    ofertaEspecial.innerHTML = "";
  
    // agregar la imagen correspondiente a la categoria
    const imagen = document.createElement("img");
    imagen.src = `assets/IMG/ofertas/banner-${categoria}.gif`; 
    ofertaEspecial.appendChild(imagen);
  
    ofertaEspecial.style.display = "block";
  
    // Ocultar el banner despues de 10 segundos
    setTimeout(() => {
      ofertaEspecial.style.display = "none";
    }, 8000);
  }