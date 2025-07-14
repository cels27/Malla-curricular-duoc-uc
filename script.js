const malla = document.getElementById("malla");

const ramos = [
  // Primer año - 1° PERIODO
  { nombre: "Bioseguridad en la atención clínica", periodo: "1° PERIODO" },
  { nombre: "Técnicas básicas de enfermería", periodo: "1° PERIODO" },
  { nombre: "Técnicas de primeros auxilios", periodo: "1° PERIODO" },
  { nombre: "Anatomía y fisiología", periodo: "1° PERIODO" },
  { nombre: "Habilidades básicas de comunicación", periodo: "1° PERIODO" },
  { nombre: "Habilidades numéricas", periodo: "1° PERIODO" },
  { nombre: "Proceso de Portafolio 1", periodo: "1° PERIODO" },

  // Primer año - 2° PERIODO
  { nombre: "Administración de fármacos", requisitos: ["Bioseguridad en la atención clínica"], periodo: "2° PERIODO" },
  { nombre: "Atención de enfermería médico quirúrgica", requisitos: ["Técnicas básicas de enfermería"], periodo: "2° PERIODO" },
  { nombre: "Cuidados de enfermería maternoneonatal", requisitos: ["Técnicas básicas de enfermería"], periodo: "2° PERIODO" },
  { nombre: "Fundamentos de antropología", periodo: "2° PERIODO" },
  { nombre: "Habilidades de comunicación efectiva", periodo: "2° PERIODO" },
  { nombre: "Habilidades del lenguaje matemático", periodo: "2° PERIODO" },
  { nombre: "Práctica clínica I", requisitos: ["Anatomía y fisiología"], periodo: "2° PERIODO" },
  { nombre: "Proceso de Portafolio 2", requisitos: ["Proceso de Portafolio 1"], periodo: "2° PERIODO" },

  // Segundo año - 3° PERIODO
  { nombre: "Cuidados de enfermería en urgencias", requisitos: ["Administración de fármacos"], periodo: "3° PERIODO" },
  { nombre: "Cuidados de enfermería pediátrica", requisitos: ["Cuidados de enfermería maternoneonatal"], periodo: "3° PERIODO" },
  { nombre: "Inglés básico I", periodo: "3° PERIODO" },
  { nombre: "Manejo de equipos e insumos", periodo: "3° PERIODO" },
  { nombre: "Optativo formación cristiana", periodo: "3° PERIODO" },
  { nombre: "Mentalidad emprendedora", periodo: "3° PERIODO" },
  { nombre: "Práctica clínica II", requisitos: ["Práctica clínica I"], periodo: "3° PERIODO" },
  { nombre: "Proceso de Portafolio 3", requisitos: ["Proceso de Portafolio 2"], periodo: "3° PERIODO" },

  // Segundo año - 4° PERIODO
  { nombre: "Cuidados de enfermería en salud mental", periodo: "4° PERIODO" },
  { nombre: "Inglés básico II", requisitos: ["Inglés básico I"], periodo: "4° PERIODO" },
  { nombre: "Habilidades para el trabajo", periodo: "4° PERIODO" },
  { nombre: "Informática en la atención del paciente", periodo: "4° PERIODO" },
  { nombre: "Promoción y prevención de la salud", periodo: "4° PERIODO" },
  { nombre: "Ética para el trabajo", periodo: "4° PERIODO" },
  { nombre: "Práctica clínica III", requisitos: ["Práctica clínica II"], periodo: "4° PERIODO" },
  { nombre: "Proceso de Portafolio Final", requisitos: ["Proceso de Portafolio 3"], periodo: "4° PERIODO" },

  // Tercer año - 5° PERIODO
  { nombre: "Internado", requisitos: ["Práctica clínica III"], periodo: "5° PERIODO" },
  { nombre: "Portafolio de título", requisitos: ["Proceso de Portafolio Final"], periodo: "5° PERIODO" },
];

// Estado que guarda qué ramos están aprobados
const estado = {};

function puedeAprobar(ramo) {
  if (!ramo.requisitos) return true;
  return ramo.requisitos.every(req => estado[req]);
}

function render() {
  malla.innerHTML = "";

  // Agrupar por periodo para mostrar título antes de cada bloque
  const periodos = [...new Set(ramos.map(r => r.periodo))];

  periodos.forEach(periodo => {
    const tituloPeriodo = document.createElement("h2");
    tituloPeriodo.textContent = periodo;
    tituloPeriodo.style.gridColumn = "1 / -1";
    tituloPeriodo.style.color = "#c71585";
    tituloPeriodo.style.textAlign = "center";
    tituloPeriodo.style.margin = "20px 0 10px";
    malla.appendChild(tituloPeriodo);

    // Filtrar ramos de ese periodo
    const ramosPeriodo = ramos.filter(r => r.periodo === periodo);

    ramosPeriodo.forEach(ramo => {
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
  });
}

render();
