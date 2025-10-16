const contenedorPeliculas = document.getElementById('contenedor-peliculas')
const btnLateral = document.getElementById('boton-lateral')
const btnLateral2 = document.getElementById('boton-lateral-2');
const menu = document.querySelector('.menu');
const btnAccion = document.getElementById('accion')
const modal = document.getElementById('modal')
const btnCerrarModal = document.getElementById('cerrar');
let peliculas = []

document.addEventListener('DOMContentLoaded', () => {
    fetch("assets/data/peliculas.json")

        .then(response => response.json())

        .then(data => {
            peliculas = data

            mostrarPeliculas()
        })

        .catch(error => {
            console.error("No se cargo el archivo JSON", error)
        })
})

function mostrarPeliculas() {
    peliculas.forEach((pelicula) => {
        const tarjeta = document.createElement('button');
        tarjeta.classList.add('card');
        tarjeta.addEventListener('click', () => {
            modal.classList.add('active');
        })

        const contfoto = document.createElement('div');
        contfoto.classList.add('cont-foto')

        const img = document.createElement('img');
        img.setAttribute('src', pelicula.ruta_caratula);

        const contInfo = document.createElement('div');
        contInfo.classList.add('cont-info');

        const titulo = document.createElement('h4');
        titulo.classList.add('titulo');
        titulo.textContent = pelicula.nombre;

        const anio = document.createElement('h4');
        anio.classList.add('anio');
        anio.textContent = pelicula.anio;

        contenedorPeliculas.appendChild(tarjeta);

        tarjeta.appendChild(contfoto);
        tarjeta.appendChild(contInfo);
        contfoto.appendChild(img);
        contInfo.appendChild(titulo);
        contInfo.appendChild(anio);

    })
}

btnLateral.addEventListener('click', () => {
    menu.classList.add('active');
})

btnLateral2.addEventListener('click', () => {
    menu.classList.remove('active');
})

btnCerrarModal.addEventListener('click', () => {
    modal.classList.remove('active')
})