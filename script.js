document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  // Inicializar: bloquear los que tienen requisitos
  ramos.forEach(ramo => {
    const req = ramo.dataset.req;
    if (req) {
      ramo.classList.add("bloqueado");
      ramo.disabled = true;
    }
  });

  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;

      // Toggle aprobado
      ramo.classList.toggle("aprobado");

      // Actualizar desbloqueos
      actualizarDesbloqueos();
    });
  });

  function actualizarDesbloqueos() {
    ramos.forEach(ramo => {
      const reqs = ramo.dataset.req?.split(",").map(r => r.trim());
      if (!reqs) return; // sin requisito: siempre desbloqueado

      const cumplidos = reqs.every(id =>
        document.querySelector(`[data-id="${id}"]`)?.classList.contains("aprobado")
      );

      if (cumplidos) {
        ramo.classList.remove("bloqueado");
        ramo.disabled = false;
      } else {
        ramo.classList.add("bloqueado");
        ramo.disabled = true;
        ramo.classList.remove("aprobado"); // si se bloquea, desaprobarlo
      }
    });
  }
});
