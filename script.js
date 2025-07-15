document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');
  const estado = JSON.parse(localStorage.getItem('estadoRamos')) || {};

  // Restaurar estado guardado
  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    if (estado[id]) {
      ramo.classList.add('aprobado');
    }

    // Agregar interactividad
    ramo.addEventListener('click', () => {
      ramo.classList.toggle('aprobado');
      estado[id] = ramo.classList.contains('aprobado');
      localStorage.setItem('estadoRamos', JSON.stringify(estado));
    });
  });
});
