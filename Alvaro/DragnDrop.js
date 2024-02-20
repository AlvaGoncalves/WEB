// Función para manejar el evento de arrastrar y soltar
function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
  
    var files = evt.dataTransfer.files; // Lista de archivos arrastrados
  
    for (var i = 0, f; f = files[i]; i++) {
      // Leer el archivo aquí. Por ejemplo, puedes enviarlo a un servidor
      console.log(f);
    }
  }
  
  // Función para manejar los eventos de arrastrar sobre y arrastrar fuera
  function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Visualmente indica que se van a copiar los archivos
  }
  
  // Obtener el elemento de la zona de arrastre
  var dropZone = document.getElementById('drop_zone');
  
  // Agregar los listeners de los eventos
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleFileSelect, false);
