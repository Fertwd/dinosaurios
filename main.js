document.addEventListener('DOMContentLoaded', () => {

    const audio = document.getElementById('audio-invitacion');
    const btnPlayPause = document.getElementById('control-play-pause');
    const iconoPlay = document.getElementById('icono-play');
    const iconoPausa = document.getElementById('icono-pausa');
    const progresoActual = document.querySelector('.progreso-actual');
    const manejadorProgreso = document.querySelector('.manejador-progreso');
    const barraProgreso = document.querySelector('.linea-progreso');

    let interaccionIniciada = false;

    const playAudio = () => {
        audio.play().then(() => {
            iconoPlay.style.display = 'none';
            iconoPausa.style.display = 'block';
        }).catch(() => {
            interaccionIniciada = false;
        });
        interaccionIniciada = true;
    };

    document.body.addEventListener('click', () => {
        if (!interaccionIniciada) {
            playAudio();
        }
    }, { once: true });

    btnPlayPause.addEventListener('click', (e) => {
        e.stopPropagation();
        if (audio.paused) {
            playAudio();
        } else {
            audio.pause();
            iconoPlay.style.display = 'block';
            iconoPausa.style.display = 'none';
        }
    });

    audio.addEventListener('timeupdate', () => {
        if (!isNaN(audio.duration)) {
            const porcentaje = (audio.currentTime / audio.duration) * 100;
            progresoActual.style.width = porcentaje + '%';
            manejadorProgreso.style.left = porcentaje + '%';
        }
    });

    barraProgreso.addEventListener('click', (e) => {
        if (!interaccionIniciada) return;
        const rect = barraProgreso.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const width = rect.width;
        const clickPercentage = offsetX / width;
        audio.currentTime = clickPercentage * audio.duration;
    });

    const btnUbicacion = document.getElementById('boton-ubicacion');
    const btnConfirmar = document.getElementById('boton-confirmar');

    btnUbicacion.href = "https://maps.app.goo.gl/CyhRqWreoKzfYL8MA"; 

    btnConfirmar.addEventListener('click', (e) => {
        e.preventDefault();
        const numeroWhatsApp = "528979713312"; 
        const mensaje = encodeURIComponent("¡Hola! Confirmo mi asistencia a la expedición de Andrés el 11 de julio. 🦖");
        const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
        window.open(enlaceWhatsApp, '_blank');
    });

});