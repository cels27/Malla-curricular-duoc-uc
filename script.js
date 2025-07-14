// Al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const subjects = document.querySelectorAll('.subject');

  // Guardar el estado en localStorage para persistencia
  let approvedSet = new Set(JSON.parse(localStorage.getItem('approvedSubjects')) || []);

  // Función para actualizar estado de cada ramo (habilitar o deshabilitar)
  function updateSubjects() {
    subjects.forEach(button => {
      const code = button.dataset.code;
      const requisites = button.dataset.requisites ? button.dataset.requisites.split(',') : [];

      // Si ya está aprobado, habilitar y marcar como aprobado
      if (approvedSet.has(code)) {
        button.disabled = false;
        button.classList.add('approved');
      } else {
        // Habilitar solo si todos los requisitos están aprobados
        const canUnlock = requisites.every(r => approvedSet.has(r) || r === '');
        button.disabled = !canUnlock;
        button.classList.remove('approved');
      }
    });
  }

  // Inicializar botones según el estado guardado
  updateSubjects();

  // Al hacer click en un ramo
  subjects.forEach(button => {
    button.addEventListener('click', () => {
      const code = button.dataset.code;
      if (!button.disabled && !approvedSet.has(code)) {
        approvedSet.add(code);
        localStorage.setItem('approvedSubjects', JSON.stringify([...approvedSet]));
        updateSubjects();
      }
    });
  });
});

