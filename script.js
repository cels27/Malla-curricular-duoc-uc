document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".periodo ul li");

  // Cargar aprobados desde localStorage
  const aprobados = JSON.parse(localStorage.getItem("ramosAprobados")) || {};

  // Restaurar estado
  ramos.forEach(ramo => {
    const nombre = ramo.dataset.ramo;
    if (aprobados[nombre]) {
      ramo.classList.add("aprobado");
    }
  });

  // Toggle aprobado al hacer clic y guardar
  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      ramo.classList.toggle("aprobado");
      const nombre = ramo.dataset.ramo;

      if (ramo.classList.contains("aprobado")) {
        aprobados[nombre] = true;
      } else {
        delete aprobados[nombre];
      }

      localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
    });
  });
});
