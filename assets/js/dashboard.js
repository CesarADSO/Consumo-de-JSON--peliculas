const contenedorPeliculas = document.getElementById('contenedor-peliculas')
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
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card');

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