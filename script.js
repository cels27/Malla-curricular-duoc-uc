// script.js
const malla = document.getElementById("malla");

const ramos = [
  { nombre: "Bioseguridad en la atención clínica" },
  { nombre: "Técnicas básicas de enfermería" },
  { nombre: "Técnicas de primeros auxilios" },
  { nombre: "Anatomía y fisiología" },
  { nombre: "Habilidades básicas de comunicación" },
  { nombre: "Habilidades numéricas" },
  { nombre: "Proceso de Portafolio 1" },

  { nombre: "Administración de fármacos", requisitos: ["Bioseguridad en la atención clínica"] },
  { nombre: "Atención de enfermería médico quirúrgica", requisitos: ["Técnicas básicas de enfermería"] },
  { nombre: "Cuidados de enfermería maternoneonatal", requisitos: ["Técnicas básicas de enfermería"] },
  { nombre: "Fundamentos de antropología" },
  { nombre: "Habilidades de comunicación efectiva" },
  { nombre: "Habilidades del lenguaje matemático" },
  { nombre: "Práctica clínica I", requisitos: ["Anatomía y fisiología"] },
  { nombre: "Proceso de Portafolio 2", requisitos: ["Proceso de Portafolio 1"] },

  { nombre: "Cuidados de enfermería en urgencias", requisitos: ["Administración de fármacos"] },
  { nombre: "Cuidados de enfermería pediátrica", requisitos: ["Cuidados de enfermería maternoneonatal"] },
  { nombre: "Inglés básico I" },
  { nombre: "Manejo de equipos e insumos" },
  { nombre: "Optativo formación cristiana" },
  { nombre: "Mentalidad emprendedora" },
  { nombre: "Práctica clínica II", requisitos: ["Práctica clínica I"] },
  { nombre: "Proceso de Portafolio 3", requisitos: ["Proceso de Portafolio 2"] },

  { nombre: "Cuidados de enfermería en salud mental" },
  { nombre: "Inglés básico II", requisitos: ["Inglés básico I"] },
  { nombre: "Habilidades para el trabajo" },
  { nombre: "Informática en la atención del paciente" },
  { nombre: "Promoción y prevención de la salud" },
  { nombre: "Ética para el trabajo" },
  { nombre: "Práctica clínica III", requisitos: ["Práctica clínica II"] },
  { nombre: "Proceso de Portafolio Final", requisitos: ["Proceso de Portafolio 3"] },

  { nombre: "Internado", requisitos: ["Práctica clínica III"] },
  { nombre: "Portafolio de título", requisitos: ["Proceso de Portafolio Final"] },
];

const estado = {};

function puedeAprobar(ramo) {
  if (!ramo.requisitos) return true;
  return ramo.requisitos.every(req => estado[req]);
}

function render() {
  malla.innerHTML = "";
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre;

    if (estado[ramo.nombre]) {
      div.classList.add("aprobado");
    } else if (!puedeAprobar(ramo)) {
      div.classList.add("bloqueado");
    }

    div.addEventListener("click", () => {
      if (!puedeAprobar(ramo)) return;
      estado[ramo.nombre] = !estado[ramo.nombre];
      render();
    });

    malla.appendChild(div);
  });
}

render();
  
