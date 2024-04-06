import { crearEncabezado } from "./encabezado.js";
import { crearBoton } from "./exportarboto.js";
import { crearParrafo } from "./parrafo.js"
import { Crearh1 } from "./parrafo.js";
// import { crearFondo } from "./encabezado.js";


const main = document.createElement("div");
// Poner la clase
main.classList.add("main-navigation");
main.innerHTML = crearEncabezado();
document.body.appendChild(main);
main.style.backgroundColor = "#CC6CE7";

const h1t = Crearh1("mi-h1", "Bienvenido");
document.body.appendChild(h1t)
// Crear el párrafo
const parrafo = crearParrafo("Parrafo1", "Esta Es la aplicacion Realizada para la entrega 4, Consiste en un formulario que añade nombres a una lista, de la que tomara algun nombre aleatorio, el boton aleatorio es para llevar a cabo este proceso, el boton limpiar es para eliminar los datos de la lista, no se podra ingresar a la lista un campo nulo.", "p1");
const parrafostilo = document.getElementById("p1");
parrafo.style.color ="#CC6CE7";
parrafo.style.marginLeft = "20%";
parrafo.style.marginRight = "20%";
// Agregar el párrafo al cuerpo del documento o a un elemento específico
document.body.appendChild(parrafo);
document.body.style.backgroundColor = "#1A161B";


const h1 = Crearh1("mi-h1", "Nombres Aleatorios");
document.body.appendChild(h1);

// Creo un nuevo boton
const divBoton = document.createElement("div");
divBoton.appendChild(crearBoton("button", "Aleatorio", "btnAleatorio"))
divBoton.appendChild(crearBoton("button", "Limpiar", "btnVolver"))

divBoton.style.marginLeft = "45%";
document.body.appendChild(divBoton);

// Buscar boton por id
const btnStilo = document.getElementById("btnAleatorio");
btnStilo.style.color = "#1A161B";
btnStilo.style.backgroundColor = "#CC6CE7";

const textoAleatorio = document.createElement('div');
textoAleatorio.id = 'textoAleatorio';
textoAleatorio.style.color = "#CC6CE7";
textoAleatorio.style.fontSize = "40px";
textoAleatorio.style.marginLeft = "30%";
document.body.appendChild(textoAleatorio);

// Crear formulario, campos de entrada y botones
const formulario = document.createElement('form');
formulario.onsubmit = function(e) {
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página
    agregarTexto(document.getElementById('textoUsuario').value);
    document.getElementById('textoUsuario').value = ''; // Limpia el campo de entrada
};

const inputTexto = document.createElement('input');
inputTexto.type = 'text';
inputTexto.id = 'textoUsuario';
inputTexto.placeholder = 'Ingresa un texto';
inputTexto.style.marginTop = "3%";
inputTexto.style.marginRight= "25%";
inputTexto.style.marginLeft = "30%";

const btnAgregar = document.createElement('button');
btnAgregar.type = 'submit';
btnAgregar.innerText = 'Agregar';

// Agregar elementos al formulario y al DOM
formulario.appendChild(inputTexto);
formulario.appendChild(btnAgregar);
formulario.style.backgroundColor = "white";
document.body.appendChild(formulario);

// Lista de textos ingresados por el usuario
let textos = [];

// Crear contenedor para la lista de nombres
const listaNombres = document.createElement('div');
listaNombres.id = 'listaNombres';
listaNombres.style.color ="white";
listaNombres.style.marginLeft = "30%";
document.body.appendChild(listaNombres);

// Función para agregar un texto a la lista y actualizar la lista de nombres
function agregarTexto(texto) {
    // Verifica si el texto no está vacío antes de añadirlo a la lista
    if (texto.trim() !== '') {
        textos.push(texto);
        actualizarListaNombres();
    }
}

// Función para actualizar la lista de nombres
function actualizarListaNombres() {
    const listaNombresElement = document.getElementById('listaNombres');
    listaNombresElement.innerHTML = ''; // Limpia el contenedor antes de actualizar
    textos.forEach(texto => {
        const elementoLista = document.createElement('p');
        elementoLista.textContent = texto;
        listaNombresElement.appendChild(elementoLista);
    });
}

// Función para seleccionar un texto aleatorio
function seleccionarTextoAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * textos.length);
    return textos[indiceAleatorio];
}
// Función para actualizar el texto aleatorio
function actualizarTextoAleatorio() {
    const textoAleatorio = seleccionarTextoAleatorio();
    document.getElementById('textoAleatorio').innerText = textoAleatorio;
}

document.addEventListener('DOMContentLoaded', actualizarListaNombres);
// Evento para el botón Aleatorio
document.getElementById('btnAleatorio').addEventListener('click', actualizarTextoAleatorio);

// Evento para el botón Volver
document.getElementById('btnVolver').addEventListener('click', function() {
    // Limpia la lista de nombres
    textos = []; // Esto borra todos los elementos de la lista
    actualizarListaNombres(); // Actualiza la lista en el DOM para reflejar los cambios

    // Limpia el contenedor de texto aleatorio
    document.getElementById('textoAleatorio').innerText = '';
});

const h1u = Crearh1("mi-h1", "¡Nos Vemos Pronto!");

document.body.appendChild(h1u);


