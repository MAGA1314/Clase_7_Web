export const crearParrafo = (clase, texto, id) => {
    const parrafo = document.createElement("p"); // Corregido a "p"
    parrafo.textContent = texto;
    parrafo.className = clase; // Añadido para asignar la clase
    parrafo.id = id;
    return parrafo; // Añadido para devolver el elemento
};
export const Crearh1 = (clase, texto, id) => {
    const h1 = document.createElement("h1");
    h1.textContent = texto;
    h1.className = clase;
    h1.id = id;
    h1.style.color = "white";
    h1.style.textAlign = 'center';
    return h1;
}
