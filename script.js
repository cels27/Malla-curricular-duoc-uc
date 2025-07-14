document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  // Inicialmente bloquear todos los que tienen requisitos
  ramos.forEach((ramo) => {
    const req = ramo.dataset.req;
    if (req) {
      ramo.classList.add("bloqueado");
      ramo.disabled = true;
    }
  });

  ramos.forEach((ramo) => {
    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;

      ramo.classList.toggle("aprobado");

      // Revisar desbloqueo de otros ramos
      ramos.forEach((otro) => {
        const requisitos = otro.dataset.req?.split(",");
        if (!requisitos) return;

        const cumplidos = requisitos.every((id) =>
          document.querySelector(`[data-id='${id}']`)?.classList.contains("aprobado")
        );

        if (cumplidos) {
          otro.classList.remove("bloqueado");
          otro.disabled = false;
        } else {
          otro.classList.add("bloqueado");
          otro.disabled = true;
        }
      });
    });
  });
});
