/*
export const crearEncabezado = () =>{
    return `
    <nav>
        <ul>
            <li> Home </li>
            <li> About Us </li>
        </ul>
    </nav> ` ; 
};*/
import { crearEncabezado } from "./encabezado.js";
import { crearBoton } from "./exportarboto.js";


const main = document.createElement("div");
// Poner la clase
main.classList.add("main-navigation");
main.innerHTML = crearEncabezado();

/*
main.innerHTML = `
<nav>
    <ul>
        <li> Home </li>
        <li> About Us </li>
    </ul>
</nav>    
`;
*/
document.body.appendChild(main);

// Creo un nuevo boton
const divBoton = document.createElement("div");
divBoton.appendChild(crearBoton("main-boton", "Enviar"));
divBoton.appendChild(crearBoton("btn-dos", "Registrase"));
document.body.appendChild(divBoton);
// Buscar boton por id
const btnStilo = document.getElementById("Enviar");
btnStilo.style.color = "blue";
btnStilo.style.backgroundColor = "gray";




