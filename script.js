// Función para guardar estado en localStorage
function guardarProgreso() {
    const estado = {};
    document.querySelectorAll('.ramo').forEach((ramo, index) => {
        estado[index] = ramo.classList.contains('aprobado');
    });
    localStorage.setItem('estadoRamos', JSON.stringify(estado));
}

// Función para cargar estado desde localStorage
function cargarProgreso() {
    const estadoGuardado = JSON.parse(localStorage.getItem('estadoRamos'));
    if (estadoGuardado) {
        document.querySelectorAll('.ramo').forEach((ramo, index) => {
            if (estadoGuardado[index]) {
                ramo.classList.add('aprobado');
            } else {
                ramo.classList.remove('aprobado');
            }
        });
    }
}

// Ejecuta al cargar la página
cargarProgreso();

// Habilita alternancia con clic + guarda estado
document.querySelectorAll('.ramo').forEach(ramo => {
    ramo.addEventListener('click', () => {
        ramo.classList.toggle('aprobado');
        guardarProgreso();
    });
});
