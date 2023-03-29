const inputBusqueda = document.getElementById('busqueda');
const listaCanales = document.getElementById('canales').getElementsByTagName('li');
inputBusqueda.addEventListener('keyup', function() {
 const textoBusqueda = inputBusqueda.value.toLowerCase();
 for (let i = 0; i < listaCanales.length; i++) {
  const canal = listaCanales[i].getElementsByTagName('img')[0].getAttribute('alt').toLowerCase();
  if (canal.includes(textoBusqueda)) {
   listaCanales[i].style.display = '';
  } else {
   listaCanales[i].style.display = 'none';
  }
 }
});
