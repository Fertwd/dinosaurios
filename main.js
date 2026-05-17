document.addEventListener('DOMContentLoaded', () => {
    const btnUbicacion = document.getElementById('boton-ubicacion');
    const btnConfirmar = document.getElementById('boton-confirmar');

    btnUbicacion.href = "https://maps.app.goo.gl/CyhRqWreoKzfYL8MA";

    btnConfirmar.addEventListener('click', (e) => {
        e.preventDefault();

        const numeroWhatsApp = "528971001811";
        const mensaje = encodeURIComponent(
            "¡Hola! Confirmo mi asistencia a la expedición de Andrés el 11 de julio. 🦖"
        );

        const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
        window.open(enlaceWhatsApp, '_blank');
    });
});