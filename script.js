// script.js
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll("button[data-ramo]");
  const aprobados = JSON.parse(localStorage.getItem("ramosAprobados") || "[]");

  botones.forEach(btn => {
    const nombre = btn.getAttribute("data-ramo");
    if (aprobados.includes(nombre)) {
      btn.classList.add("aprobado");
    }

    btn.addEventListener("click", () => {
      btn.classList.toggle("aprobado");
      const actualizado = Array.from(document.querySelectorAll("button.aprobado"))
                              .map(b => b.getAttribute("data-ramo"));
      localStorage.setItem("ramosAprobados", JSON.stringify(actualizado));
    });
  });
});
