export const crearBoton = (clase,texto, id) =>{
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = texto;
    boton.classList.add(clase);
    boton.id = id;
    boton.style.backgroundColor ='';
    return boton;
}