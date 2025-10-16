const contenedorPeliculas = document.getElementById('contenedor-peliculas')
const btnLateral = document.getElementById('boton-lateral')
const btnLateral2 = document.getElementById('boton-lateral-2');
const menu = document.querySelector('.menu');
const btnAccion = document.getElementById('accion')
const modal = document.getElementById('modal')
const contModal = document.getElementById('cont-modal');
let peliculas = []
let indiceActual = 0

document.addEventListener('DOMContentLoaded', () => {
    fetch("assets/data/peliculas.json")

        .then(response => response.json())

        .then(data => {
            peliculas = data

            mostrarPeliculaModal(indiceActual)

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



function mostrarPeliculaModal(indice) {
    const pelicula = peliculas[indice];

    const header = document.createElement('header');
    header.classList.add('movie-hero');
    header.style.backgroundImage = `url(${pelicula.ruta_caratula})`

    const a = document.createElement('a');
    a.addEventListener('click', () => {
        modal.classList.remove('active');
    })

    const span = document.createElement('span');
    span.classList.add('close-button');

    const img = document.createElement('img');
    img.setAttribute('src', 'assets/img/close.png');
    img.style.width = '30px';
    img.setAttribute('alt', 'close');

    const contInfo = document.createElement('section');
    contInfo.classList.add('movie-info');

    const metaData = document.createElement('div');
    metaData.classList.add('metadata');

    const titulo = document.createElement('h1');
    titulo.classList.add('movie-title');
    titulo.textContent = pelicula.nombre;

    const genero = document.createElement('p');
    genero.classList.add('movie-tags');
    genero.textContent = pelicula.categoria + ' - ';

    const anio = document.createElement('span');
    anio.textContent = pelicula.anio;

    const hr = document.createElement('hr');
    hr.classList.add('separator');

    const contSinopsis = document.createElement('div');
    contSinopsis.classList.add('synopsis');
    
    const sinopsis = document.createElement('p');
    sinopsis.textContent = pelicula.sinopsis;

    const contCreditos = document.createElement('div');
    contCreditos.classList.add('credits');

    const p = document.createElement('p');
    p.innerHTML = `<strong>Reparto:</strong> <br> ${pelicula.reparto}`;

    const botonVerPelicula = document.createElement('button');
    botonVerPelicula.classList.add('action-button');
    botonVerPelicula.textContent = 'VER PELÍCULA';

    const simboloPlay = document.createElement('span');
    simboloPlay.textContent = '▶';

    contModal.appendChild(header);
    contModal.appendChild(contInfo);
    header.appendChild(a);
    a.appendChild(span);
    span.appendChild(img);
    contInfo.appendChild(metaData);
    contInfo.appendChild(hr);
    contInfo.appendChild(contSinopsis);
    contInfo.appendChild(contCreditos);
    contInfo.appendChild(botonVerPelicula);
    botonVerPelicula.appendChild(simboloPlay);
    metaData.appendChild(titulo);
    metaData.appendChild(genero);
    genero.appendChild(anio);
    contSinopsis.appendChild(sinopsis);
    contCreditos.appendChild(p);
}