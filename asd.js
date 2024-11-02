// Agregar este código en tu archivo JavaScript existente o dentro de una etiqueta <script> en tu HTML

const busquedaInput = document.getElementById('busqueda');

busquedaInput.addEventListener('input', function() {
  const query = busquedaInput.value.toLowerCase();
  const canalItems = document.querySelectorAll('#canales li');

  canalItems.forEach(item => {
    const canalTitle = item.querySelector('div').title.toLowerCase();
    if (canalTitle.includes(query)) {
      item.style.display = ''; // Mostrar el elemento si coincide
    } else {
      item.style.display = 'none'; // Ocultar el elemento si no coincide
    }
  });
});
