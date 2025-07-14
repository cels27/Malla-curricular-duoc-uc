// Al cargar la página restaurar estado de selección desde localStorage
document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');

  // Obtener estado guardado (objeto con ids y true/false)
  const saved = JSON.parse(localStorage.getItem('ramosSeleccionados') || '{}');

  // Restaurar estados
  ramos.forEach(ramo => {
    const id = ramo.dataset.id;
    if (saved[id]) {
      ramo.classList.add('selected');
    } else {
      ramo.classList.remove('selected');
    }

    // Agregar evento click para alternar estado
    ramo.addEventListener('click', () => {
      ramo.classList.toggle('selected');
      saveState();
    });
  });

  // Guardar estado actual en localStorage
  function saveState() {
    const estados = {};
    ramos.forEach(ramo => {
      estados[ramo.dataset.id] = ramo.classList.contains('selected');
    });
    localStorage.setItem('ramosSeleccionados', JSON.stringify(estados));
  }
});
