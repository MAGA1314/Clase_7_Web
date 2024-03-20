export const crearBoton = (clase,texto) =>{
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = texto;
    boton.classList.add(clase);
    return boton;
}