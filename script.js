// Cuando se hace clic en un ramo, se "aprueba" (agrega clase)
document.querySelectorAll('.ramo').forEach(ramo => {
    ramo.addEventListener('click', () => {
        // Si ya está aprobado, no hace nada
        if (ramo.classList.contains('aprobado')) return;

        ramo.classList.add('aprobado');
    });
});
