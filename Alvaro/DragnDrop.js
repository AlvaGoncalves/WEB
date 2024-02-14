// Seleccionamos el elemento que queremos arrastrar
var caja = document.getElementById("draggable-1");

// Añadimos el evento dragstart para iniciar el arrastre
caja.addEventListener("dragstart", function(event) {
  // Guardamos el id del elemento en el objeto dataTransfer
  event.dataTransfer.setData("Data", caja.id);
});

// Añadimos el evento drag para mostrar el movimiento
caja.addEventListener("drag", function(event) {
  console.log("drag");
});

// Añadimos el evento dragend para finalizar el arrastre
caja.addEventListener("dragend", function(event) {
console.log("dragend");
});

// Seleccionamos el elemento donde queremos soltar
var zona = document.querySelector(".example-dropzone");

// Añadimos el evento dragenter para detectar cuando entramos en la zona
zona.addEventListener("dragenter", function(event) {
  console.log("dragenter");
});

// Añadimos el evento dragleave para detectar cuando salimos de la zona
zona.addEventListener("dragleave", function(event) {
  console.log("dragleave");
});

// Añadimos el evento dragover para permitir el arrastre sobre la zona
zona.addEventListener("dragover", function(event) {
  console.log("dragover");
  // Cancelamos el comportamiento por defecto
  event.preventDefault();
});

// Añadimos el evento drop para soltar el elemento en la zona
zona.addEventListener("drop", function(event) {
  console.log("drop");
  // Obtenemos el id del elemento arrastrado
  var caja = event.dataTransfer.getData("Data");
  // Añadimos el elemento arrastrado a la zona
  zona.appendChild(document.getElementById(caja));
});